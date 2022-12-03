import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { PRODUCT_LOG as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import { getProductsLog } from "store/actions/product"
import ListComposed from "components/utils/listComposed"
import Filter from "components/product/log/Filter"
import Card from "components/product/log/Card"
import "components/product/product.scss"

export default function Log() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector(
        (s) => s.filter
    )
    useEffect(() => {
        getProductsLog({ ...filter.product.log })
    }, [filter.product.log])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            product: {
                ...filter.product,
                log: checkFilters({
                    ...filter.product.log,
                    ...values,
                    pageIndex: 1
                })
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
                log: {
                    ...filter.product.log,
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
            title: "حواله",
            key: "commerceID",
            width: "5%",
        },
        {
            title: "کد محصول",
            key: "productID",
            width: "5%",
        },
        {
            title: "کد سفارش",
            key: "orderID",
            width: "5%",
        },
        {
            title: "کاربر",
            key: "username",
            width: "5%",
        },
        {
            title: "نام محصول",
            key: "productName",
            width: "10%",
        },
        {
            title: "نام برند",
            key: "brandName",
            width: "5%",
        },
        {
            title: "تغییر",
            key: "changeCount",
            width: "5%",
            className: "change-count",
            render: (f) => f > 0 ? <span className="success">{f}</span> : <span className="fail">{f}</span>
        },
        {
            title: "موجودی فعلی",
            key: "currentCount",
            width: "5%",
        },
        {
            title: "علت",
            key: "warehouseType",
            width: "10%",
        },
        {
            title: "توضیحات",
            key: "description",
            width: "10%",
        },
        {
            title: "تاریخ تغییر",
            key: "dateString",
            width: "10%",
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{
                    ...filter.product.log,
                    dateFrom: gregorianToJalali(filter.product.log.dateFrom),
                    dateTo: gregorianToJalali(filter.product.log.dateTo)
                }}
            />
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}