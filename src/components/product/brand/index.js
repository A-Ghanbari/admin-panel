import { useEffect, useState } from "react"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { useSelector } from "react-redux"
import { BRAND as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { deleteBrand, getBrands } from "store/actions/product"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/product/brand/Filter"
import Card from "components/product/brand/Card"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"

export default function Brand() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getBrands(checkFilters({ ...filter.product.brand }))
    }, [filter.product.brand, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            product: {
                ...filter.product,
                brand: {
                    ...filter.product.brand,
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
                brand: {
                    ...filter.product.brand,
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
            width: "5%",
        },
        {
            title: "نام لاتین",
            key: "latinName",
            width: "5%",
        },
        {
            title: "توضیحات",
            key: "description",
            width: "10%",
        },
        {
            title: "لوگو",
            key: "picLink",
            width: "5%",
            render: (f, r) => (
                <img src={f} width="40" height="40" />
            ),
        },
        {
            title: "نمایش در سایت ",
            key: "showInMain",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./edit/${r.ID}`}>
                        <Icon key="edit" type="edit" title="ویرایش برند" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف برند کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteBrand({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" title="حذف برند" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.product.brand }}
            />
            <ActionButton position="right">
                <Link to='./create'>
                    <Button
                        type="secondary-accent"
                        label="ایجاد برند جدید"
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