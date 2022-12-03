import { useEffect, useState } from "react"
import { PROVINCE_ORDER as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import { getProvinceOrderList } from "store/actions/order"
import ListComposed from "components/utils/listComposed"
import Card from "components/order/province/Card"
import Filter from "components/order/province/Filter"
import "components/order/order.scss"
import { useSelector } from "react-redux"
import { setFilter } from "store/actions/filter"
import { dispatch } from "store"

function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const filter = useSelector(
        (s) => s.filter
    )

    useEffect(() => {
        getProvinceOrderList({ ...filter.order.province })
    }, [filter.order.province])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            order: {
                ...filter.order,
                province: checkFilters({
                    ...filter.order.province,
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
            order: {
                ...filter.order,
                province: {
                    ...filter.order.province,
                    pageIndex: index,
                    pageSize: size
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
            title: 'تاریخ',
            key: 'date',
            width: '5%',
        }, {
            title: 'شرکت پستی',
            key: 'postCompany',
            width: '10%',
        }, {
            title: 'تعداد سفارش‌های بارگیری‌نشده',
            key: 'unsendedcount',
            width: '10%',
        }
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{
                    ...filter.order.province,
                    orderDateFrom: gregorianToJalali(filter.order.province.orderDateFrom),
                    orderDateTo: gregorianToJalali(filter.order.province.orderDateTo)
                }}
            />
            <ListComposed
                entity={entity}
                card={Card}
                columns={columns}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}

export default List