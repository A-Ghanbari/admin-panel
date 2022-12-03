import { useEffect, useState } from "react"
import { getManualOrderProvince } from "store/actions/manualOrder"
import { MANUAL_ORDER_PROVINCE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import ListComposed from "components/utils/listComposed"
import Card from "components/manualOrder/province/Card"
import Filter from "components/manualOrder/province/Filter"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"

export default function Province() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector(
        (s) => s.filter
    )

    useEffect(() => {
        getManualOrderProvince({ ...filter.manualOrder.province })
    }, [filter.manualOrder.province])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            manualOrder: {
                ...filter.manualOrder,
                province: checkFilters({
                    ...filter.manualOrder.province,
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
            manualOrder: {
                ...filter.manualOrder,
                province: {
                    ...filter.manualOrder.province,
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
            title: 'استان',
            key: 'provicne',
            width: '5%',
        }, {
            title: 'تاریخ ',
            key: 'date',
            width: '5%',
        }, {
            title: 'شرکت پستی',
            key: 'postCompany',
            width: '10%',
        }, {
            title: 'تعداد سفارش های بارگیری نشده',
            key: 'unsendedcount',
            width: '10%',
        }
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{
                    ...filter.manualOrder.province,
                    orderDateFrom: gregorianToJalali(filter.manualOrder.province.orderDateFrom),
                    orderDateTo: gregorianToJalali(filter.manualOrder.province.orderDateTo)
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