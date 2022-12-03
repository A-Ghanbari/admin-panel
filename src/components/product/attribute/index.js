import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { PRODUCT_ATTRIBUTE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { deleteProductAttribute, getProductsAttributes } from "store/actions/product"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/product/attribute/Filter"
import Card from "components/product/attribute/Card"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"

export default function Attribute() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getProductsAttributes(checkFilters({ ...filter.product.attribute }))
    }, [filter.product.attribute, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            product: {
                ...filter.product,
                attribute: {
                    ...filter.product.attribute,
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
                attribute: {
                    ...filter.product.attribute,
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
            title: "ویژگی بالاسری",
            key: "parentName",
            width: "10%",
        },
        {
            title: "کد ویژگی بالاسری",
            key: "parentID",
            width: "5%",
        },
        {
            title: "توضیحات",
            key: "description",
            width: "10%",
        },
        {
            title: "نوع نمایش",
            key: "selectTypeName",
            width: "10%",
        },
        {
            title: "شاخص",
            key: "necessaryForCommerceRequest",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
        {
            title: "فعال",
            key: "isActive",
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
                        <Icon key="edit" type="edit" title="ویرایش ویژگی" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف ویژگی  "${r.title}" اطمینان دارید؟`}
                        onConfirm={() => deleteProductAttribute({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" title="حذف ویژگی" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.product.attribute }}
            />
            <ActionButton position="right">
                <Link to='./create'>
                    <Button
                        type="secondary-accent"
                        label="ایجاد ویژگی جدید"
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