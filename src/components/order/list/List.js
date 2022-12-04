import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { getItems } from "store/actions/order"
import { setFilter } from "store/actions/filter"
import { ORDER as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { addCommaToNumber, checkFilters, gregorianToJalali } from "tools/utils"
import Icon from "components/utils/field/Icon"
import Link from "components/utils/link"
import ListComposed from "components/utils/listComposed"
import Card from "components/order/list/Card"
import Filter from "components/order/list/Filter"
import PostImage from "components/utils/postImage"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import { exportTableExcelFile } from "store/actions/export"
import API_SERVICES from "tools/shared/apis"
import Notification from "components/utils/notification"
import "components/order/order.scss"
import { list } from "tools/shared/order"

export default function List() {
    // const [date, setDate] = useState(null)
    // const [commercialLoading, setCommercialLoading] = useState(false)
    // const [financialLoading, setFinancialLoading] = useState(false)
    // const [pageIndex, setPageIndex] = useState(1)
    // const [pageSize, setPageSize] = useState(PAGE_SIZE)
    // const [province, setProvince] = useState({
    //     provinceID: " ",
    //     cityID: " ",
    // })

    // const filter = useSelector((s) => s.filter)
    // const reload = useSelector((s) => s.reloadList)

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
            // render: (text, record, index) => (pageIndex - 1) * pageSize + index + 1,
        }, {
            title: "شناسه مالی",
            key: "financialFactorID",
            width: "5%",
        }, {
            title: "شماره سفارش",
            key: "ID",
            width: "5%",
        }, {
            title: "نام کاربری",
            key: "customerUserName",
            width: "10%",
        }, {
            title: "نام مشتری",
            key: "customerName",
            width: "10%",
        }, {
            title: "پرداختی",
            key: "totalPaid",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(Math.floor(r / 10))} تومان`,
        }, {
            title: "تاریخ",
            key: "orderDateTime",
            width: "10%",
        }, {
            title: "پست",
            key: "postCompanyID",
            width: "5%",
            render: (f, r) => <PostImage companyId={f} />,
        }, {
            title: "وضعیت",
            key: "orderStatusName",
            width: "10%",
        }, {
            title: "بارگیری",
            key: "transStatus",
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
                <div className="actions">
                    <Link to={`./detail/${r.ID}`} title="جزییات" permission="orderDetail">
                        <Icon key="eye" type="eye" />
                    </Link>
                    <Link
                        to={`./edit/${r.ID}`}
                        title="ویرایش"
                        permission="editOrdersPermission"
                    >
                        <Icon key="edit" type="edit" />
                    </Link>
                    {/* <Link
                        to={`./changeStatus/${r.ID}`}
                        title="تغییر وضعیت"
                        permission="editOrderStatus"
                    > */}
                        <Icon key="changeStatus" type="changeStatus" />
                    {/* </Link> */}
                    {/* <Link
                        to={`./createManual/${r.ID}`}
                        title="سفارش اپراتوری"
                        permission="createManualOrder"
                    > */}
                        <Icon key="add" type="add" />
                    {/* </Link> */}
                </div>
            ),
        },
    ]

    // useEffect(() => {
    //     getItems(checkFilters({ ...filter.order.list }))
    // }, [filter.order.list, reload])

    // useEffect(() => {
    //     setFilterDate()
    // }, [])

    // const setFilterDate = () => {
    //     if (filter.order.list.dateFrom && !filter.order.list.dateTo) {
    //         setDate({ DateFrom: filter.order.list.dateFrom })
    //     }
    //     if (filter.order.list.dateFrom && filter.order.list.dateTo) {
    //         setDate({ DateFrom: filter.order.list.dateFrom, DateTo: filter.order.list.dateTo })
    //     }
    // }

    // const filterChangeHandler = (values) => {
    //     dispatch(setFilter({
    //         ...filter,
    //         order: {
    //             ...filter.order,
    //             list: {
    //                 ...filter.order.list,
    //                 ...province,
    //                 ...values,
    //                 dateFrom: date?.DateFrom,
    //                 dateTo: date?.DateTo,
    //                 provinceAndCity: undefined,
    //                 pageIndex: 1
    //             }
    //         }
    //     }))
    // }

    // const paginationChangeHandler = (index, size) => {
    //     setPageIndex(index)
    //     setPageSize(size)
    //     dispatch(setFilter({
    //         ...filter,
    //         order: {
    //             ...filter.order,
    //             list: {
    //                 ...filter.order.list,
    //                 pageIndex: index,
    //                 pageSize: size,
    //             }
    //         }
    //     }))
    // }

    return (
        <div>
            <Filter
                // onFinish={filterChangeHandler}
                // initialValues={{
                //     ...filter.order.list,
                //     dateFrom: gregorianToJalali(date?.DateFrom),
                //     dateTo: gregorianToJalali(date?.DateTo)
                // }}
                // province={province}
                // setProvince={setProvince}
                // setDate={setDate}
            />
            <ActionButton position="right">
                <Button
                    name="excel"
                    type="secondary-dark"
                    label="گزارش فروش بازرگانی"
                    // loading={commercialLoading}
                    // onClick={() =>
                    //     date?.DateFrom && date?.DateTo ?
                    //         exportTableExcelFile({
                    //             url: API_SERVICES.order.commercialSalesReport,
                    //             fileName: 'commercial-sales-report',
                    //             data: date,
                    //             loading: setCommercialLoading
                    //         })
                    //         :
                    //         Notification.error("لطفا یک بازه زمانی وارد کنید")
                    // }
                />
                <Button
                    name="excel"
                    type="secondary-dark"
                    label="گزارش فروش مالی"
                    // loading={financialLoading}
                    // onClick={() =>
                    //     date?.DateFrom && date?.DateTo ?
                    //         exportTableExcelFile({
                    //             url: API_SERVICES.order.financialSalesReport,
                    //             fileName: 'financial-sales-report',
                    //             data: { createdDateFrom: date.DateFrom, createdDateTo: date.DateTo },
                    //             loading: setFinancialLoading
                    //         })
                    //         :
                    //         Notification.error("لطفا یک بازه زمانی وارد کنید")
                    // }
                />
            </ActionButton>
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                data={list}
                // handlerChange={paginationChangeHandler}
            />
        </div>
    )
}