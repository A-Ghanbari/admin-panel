import { useEffect, useState } from "react"
import { getPackingOrdersList } from "store/actions/packing"
import { PACKING_ORDER as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import Icon from "components/utils/field/Icon"
import Link from "components/utils/link"
import ListComposed from "components/utils/listComposed"
import Card from "components/packing/orders/Card"
import Filter from "components/packing/orders/Filter"
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
            title: "شماره سفارش",
            key: "orderID",
            width: "5%",
        }, {
            title: "کاربر ایجاد کننده",
            key: "adminUserName",
            width: "10%",
        }, {
            title: "تاریخ ایجاد",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "کاربر ویرایش کننده",
            key: "userComplated",
            width: "10%",
        }, {
            title: "تاریخ ویرایش",
            key: "lastUpdateDateTime",
            width: "10%",
        }, {
            title: "میانگین زمانی",
            key: "averageComplateTime",
            width: "10%",
        }, {
            title: "خروج خورده",
            key: "isComplated",
            defaultFilteredValue: true,
            width: "5%",
            render: (r) => {
                const result = {
                    true: <span className="approved" title="خروج خورده" />,
                    false: <span className="unapproved" title="مانده در انبار" />
                }[r]
                return result
            }
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./detail/${r.ID}`} title="جزییات">
                        <Icon key="eye" type="eye" />
                    </Link>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getPackingOrdersList({ ...filter.packing.order })
    }, [filter.packing.order])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            packing: {
                ...filter.packing,
                order: checkFilters({
                    ...filter.packing.order,
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
            packing: {
                ...filter.packing,
                order: {
                    ...filter.packing.order,
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
                initialValues={{
                    ...filter.packing.order,
                    createdDateFrom: gregorianToJalali(filter.packing.order.createdDateFrom),
                    createdDateTo: gregorianToJalali(filter.packing.order.createdDateTo)
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