import { useEffect, useState } from "react"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { useSelector } from "react-redux"
import { GROUP as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { deleteGroup, getGroups } from "store/actions/product"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/product/group/Filter"
import Card from "components/product/group/Card"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"

export default function Group() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getGroups(checkFilters({ ...filter.product.group }))
    }, [filter.product.group, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            product: {
                ...filter.product,
                group: {
                    ...filter.product.group,
                    ...values,
                    pageIndex: 1
                }
            }
        }))
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            product: {
                ...filter.product,
                group: {
                    ...filter.product.group,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "نام",
            key: "name",
            width: "10%",
        },
        {
            title: "توضیحات",
            key: "description",
            width: "10%",
        },
        {
            title: "آیکون",
            key: "picLink",
            width: "5%",
            render: (f, r) => (
                <img src={f} width="40" height="40" />
            ),
        },
        {
            title: "فعال ",
            key: "isActive",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
        {
            title: "اولویت",
            key: "sort",
            width: "5%",
        },
        {
            title: "گروه بالاسری ",
            key: "parentName",
            width: "10%",
        },
        {
            title: "کد گروه بالاسری ",
            key: "parentID",
            width: "5%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./create-attribute`} state={{ ID: r.ID, name: r.name }}>
                        <Icon key="add" type="add" title="ایجاد ویژگی" />
                    </Link>
                    <Link to={`./attributes`} state={{ ID: r.ID, name: r.name }}>
                        <Icon key="eye" type="eye" title="مشاهده ویژگی ها" />
                    </Link>
                    <Link to={`./create-color`} state={{ ID: r.ID, name: r.name }}>
                        <Icon key="color" type="color" title="ایجاد رنگ" />
                    </Link>
                    <Link to={`./color-list`} state={{ ID: r.ID, name: r.name }}>
                        <Icon key="colors" type="colors" title="مشاهده رنگ ها" />
                    </Link>
                    <Link to={`./edit/${r.ID}`}>
                        <Icon key="edit" type="edit" title="ویرایش گروه" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف گروه کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteGroup({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" title="حذف گروه" />
                    </Popconfirm>
                </div >
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.product.group }}
            />
            <ActionButton position="right">
                <Link to='./create'>
                    <Button
                        type="secondary-accent"
                        label="ایجاد گروه جدید"
                    />
                </Link>
            </ActionButton>
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}