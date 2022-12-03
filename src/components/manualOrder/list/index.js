import { useEffect, useState } from "react"
import { MANUAL_ORDER as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import { deleteManualOrder, getItems } from "store/actions/manualOrder"
import PostImage from "components/utils/postImage"
import Icon from "components/utils/field/Icon"
import Filter from "components/manualOrder/list/Filter"
import ListComposed from "components/utils/listComposed"
import Card from "components/manualOrder/list/Card"
import { useSelector } from "react-redux"
import { setFilter } from "store/actions/filter"
import { dispatch } from "store"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector(
        (s) => s.filter
        //@Hossein , Ali : transStatus: 0 does not work , receives all the data when we send the transStatus: 0
    )
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getItems({ ...filter.manualOrder.list })
    }, [filter.manualOrder.list, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            manualOrder: {
                ...filter.manualOrder,
                list: checkFilters({
                    ...filter.manualOrder.list,
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
                list: {
                    ...filter.manualOrder.list,
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
        }, {
            title: "کد",
            key: "manualOrderID",
            width: "5%",
        }, {
            title: "کد سفارش اصلی",
            key: "originalOrderID",
            width: "5%",
        }, {
            title: "نام کاربر",
            key: "fullName",
            width: "10%",
        }, {
            title: "HPH",
            key: "HPH",
            width: "10%",
        }, {
            title: "نوع",
            key: "manualOrderTypeName",
            width: "10%",
        }, {
            title: "تاریخ",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "سازنده",
            key: "userCreated",
            width: "10%",
        }, {
            title: "پست",
            key: "postCompanyID",
            width: "5%",
            render: (f, r) => <PostImage companyId={f} />,
        }, {
            title: "وضعیت",
            key: "orderStatus",
            width: "10%",
        }, {
            title: "بارگیری",
            key: "orderTrans",
            defaultFilteredValue: "0",
            width: "5%",
            render: (r) => {
                const orderTrans = {
                    0: <span className="unapproved" title="بارگیری‌نشده" />,
                    1: <span className="awaiting" title="در انتظار تایید نهایی" />,
                    2: <span className="approved" title="خروج از انبار" />
                }[r]
                return orderTrans
            }
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions" >
                    <Link to={`./detail/${r.manualOrderID}`} title="جزییات">
                        <Icon key="eye" type="eye" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف سفارش اپراتوری کد "${r.manualOrderID}" اطمینان دارید؟`}
                        onConfirm={() => deleteManualOrder({ manualOrderID: r.manualOrderID })}
                        permission="deleteOrderManual"
                    >
                        <Icon title="حذف" key="delete" type="delete" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{
                    ...filter.manualOrder.list,
                    dateFrom: gregorianToJalali(filter.manualOrder.list.dateFrom),
                    dateTo: gregorianToJalali(filter.manualOrder.list.dateTo)
                }}
            />
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
                rowKey="originalOrderID"
            />
        </div>
    )
}