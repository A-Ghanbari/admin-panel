import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { PRODUCT_COLOR as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { deleteProductColor, getColors } from "store/actions/product"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/product/color/Filter"
import Card from "components/product/color/Card"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import "components/product/color/color.scss"


export default function Category() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getColors(checkFilters({ ...filter.product.color }))
    }, [filter.product.color, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            product: {
                ...filter.product,
                color: {
                    ...filter.product.color,
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
                color: {
                    ...filter.product.color,
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
            title: "عنوان",
            key: "title",
            width: "10%",
        },
        {
            title: "گروه",
            key: "categoryName",
            width: "10%",
        },
        {
            title: "کد رنگ",
            key: "colorCode",
            width: "5%",
            className: "color-code",
            render: (f, r) => (
                <div style={{ backgroundColor: `${f}` }}>{f}</div>
            ),
        },
        {
            title: "تعداد کالا ",
            key: "productCount",
            width: "5%",

        },
        {
            title: "وضعیت",
            key: "isActive",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
        {
            title: "سازنده",
            key: "userCreated",
            width: "5%",
        },
        {
            title: "تاریخ ساخت  ",
            key: "createdDateTime",
            width: "5%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./detail/${r.ID}`} title="جزییات" >
                        <Icon key="eye" type="eye" />
                    </Link>
                    <Link
                        to={`./edit/${r.ID}`}
                        title="ویرایش"
                    >
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف رنگ با کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteProductColor({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.product.color }}
            />
            <ActionButton position="right">
                <Link to="./create/">
                    <Button
                        type="secondary-accent"
                        label="ایجاد رنگ جدید"
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