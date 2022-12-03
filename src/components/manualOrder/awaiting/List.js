import { useEffect, useState } from "react"
import { getManualOrderAwaiting } from "store/actions/manualOrder"
import { MANUAL_ORDER_AWAITING as entity } from "tools/utils/entities"
import { checkFilters } from "tools/utils"
import Filter from "components/manualOrder/awaiting/Filter"
import { PAGE_SIZE } from "tools/shared/constants"
import ListComposed from "components/utils/listComposed"
import Card from "components/manualOrder/awaiting/Card"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import Link from "components/utils/link"
import Icon from "components/utils/field/Icon"

export default function Awaiting() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector(
        (s) => s.filter
    )

    useEffect(() => {
        getManualOrderAwaiting(checkFilters({ ...filter.manualOrder.awaiting }))
    }, [filter])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            manualOrder: {
                ...filter.manualOrder,
                awaiting: {
                    ...filter.manualOrder.awaiting,
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
            manualOrder: {
                ...filter.manualOrder,
                awaiting: {
                    ...filter.manualOrder.awaiting,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    const columns = [
        {
            title: 'ردیف',
            key: 'index',
            width: '5%',
            render: (text, record, index) => index + 1
        }, {
            title: 'HPH',
            key: 'HPH',
            width: '5%',
        }, {
            title: 'کد سفارش اصلی ',
            key: 'originalOrderID',
            width: '5%',
        }, {
            title: 'کد سفارش اپراتوری ',
            key: 'manualOrderID',
            width: '10%',
        }, {
            title: 'وضعیت سفارش',
            key: 'manualOrderStatusName',
            width: '10%',
        }, {
            title: 'نوع سفارش',
            key: 'manualOrderType',
            width: '10%',
        }, {
            title: 'سازنده سفارش',
            key: 'manualOrderUserCreated',
            width: '10%',
        }, {
            title: 'کاربر تایید کننده',
            key: 'userAccepted',
            width: '10%',
        }, {
            title: 'تاریخ ساخت',
            key: 'createdDateTime',
            width: '10%',
        }, {
            title: 'عملیات',
            key: 'actions',
            width: '10%',
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./detail/${r.ID}`} state={{ manualOrderID: r.manualOrderID }} title="جزییات">
                        <Icon key="eye" type="eye" />
                    </Link>
                </div>
            ),
        }
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.manualOrder.awaiting }}
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