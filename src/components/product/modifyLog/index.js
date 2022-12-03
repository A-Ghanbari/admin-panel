import { useEffect, useState } from "react"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { useSelector } from "react-redux"
import { PRODUCT_MODIFY_LOG as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import { getProductsModifyLogs } from "store/actions/product"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/product/modifyLog/Filter"
import Card from "components/product/modifyLog/Card"
import Link from "components/utils/link"

export default function ModifyLog() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)


    const filter = useSelector(
        (s) => s.filter
    )

    useEffect(() => {
        getProductsModifyLogs({ ...filter.product.modifyLog })
    }, [filter.product.modifyLog])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            product: {
                ...filter.product,
                modifyLog: checkFilters({
                    ...filter.product.modifyLog,
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
                modifyLog: {
                    ...filter.product.modifyLog,
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
            title: "نام محصول",
            key: "productName",
            width: "10%",
        },
        {
            title: "کد محصول",
            key: "productID",
            width: "10%",
        },
        {
            title: "نام برند",
            key: "brandName",
            width: "10%",
        },
        {
            title: "کاربر",
            key: "userCreated",
            width: "5%",
        },
        {
            title: "تاریخ تغییر",
            key: "createdDateTime",
            width: "10%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./detail/${r.ID}`}>
                        <Icon key="eye" type="eye" />
                    </Link>
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{
                    ...filter.product.modifyLog,
                    dateFrom: gregorianToJalali(filter.product.modifyLog.dateFrom),
                    dateTo: gregorianToJalali(filter.product.modifyLog.dateTo)
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