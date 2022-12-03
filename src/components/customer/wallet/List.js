import { useEffect, useState } from "react"
import { getWalletTransactions } from "store/actions/customer"
import { WALLETS_TRANSACTIONS as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { addCommaToNumber, checkFilters } from "tools/utils"
import ListComposed from "components/utils/listComposed"
import Card from "components/customer/wallet/Card"
import Filter from "components/customer/wallet/Filter"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector(
        (s) => s.filter
    )

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "شناسه مالی",
            key: "bankTransactionsId",
            width: "5%"
        }, {
            title: "نام کاربری",
            key: "userName",
            width: "5%",
        }, {
            title: "نام",
            key: "customerFullName",
            width: "5%",
        }, {
            title: "نوع انتقال",
            key: "transactionTypeName",
            width: "10%",
        }, {
            title: "مقدار انتقال",
            key: "changeBalance",
            width: "10%",
            render: (r, f) => {
                return (<span className={r > 0 ? 'success' : 'fail'}>{`${addCommaToNumber(r / 10)} تومان`}</span>)
            }
        }, {
            title: "موجودی فعلی",
            key: "currentBalance",
            width: "5%",
            render: (r, f) => {
                return (<span className={r > 0 ? 'success' : 'fail'}>{`${addCommaToNumber(r / 10)} تومان`}</span>)
            }
        }, {
            title: "انتقال دهنده",
            key: "adminCharger",
            width: "10%",
        }, {
            title: "توضیحات",
            key: "description",
            width: "10%",
        }, {
            title: "وضعیت",
            key: "status",
            width: "10%",
        }, {
            title: "تاریخ انتقال",
            key: "transactionDateTime",
            width: "10%",
        }
    ]

    useEffect(() => {
        getWalletTransactions(checkFilters({ ...filter.customer.wallet }))
    }, [filter.customer.wallet])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            customer: {
                ...filter.customer,
                wallet: {
                    ...filter.customer.wallet,
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
            customer: {
                ...filter.customer,
                wallet: {
                    ...filter.customer.wallet,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.customer.wallet }}
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