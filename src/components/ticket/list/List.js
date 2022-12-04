import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { TICKET as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import { getCustomerTickets } from "store/actions/ticket"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/ticket/list/Filter"
import Card from "components/ticket/list/Card"
import Link from "components/utils/link"
import "components/ticket/ticket.scss"
import { ticketList } from "tools/shared/ticket"

export default function List() {
    // const [pageIndex, setPageIndex] = useState(1)
    // const [pageSize, setPageSize] = useState(PAGE_SIZE)

    // const filter = useSelector(
    //     (s) => s.filter
    // )

    // useEffect(() => {
    //     getCustomerTickets({ ...filter.ticket.list })
    // }, [filter.ticket.list])

    // const filterChangeHandler = (values) => {
    //     dispatch(setFilter({
    //         ...filter,
    //         ticket: {
    //             ...filter.ticket,
    //             list: checkFilters({
    //                 ...filter.ticket.list,
    //                 ...values,
    //                 pageIndex: 1
    //             })
    //         }
    //     }))
    // }

    // const paginationChangeHandler = (index, size) => {
    //     setPageIndex(index)
    //     setPageSize(size)
    //     dispatch(setFilter({
    //         ...filter,
    //         ticket: {
    //             ...filter.ticket,
    //             list: {
    //                 ...filter.ticket.list,
    //                 pageIndex: index,
    //                 pageSize: size
    //             }
    //         }
    //     }))
    // }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "کد",
            key: "ticketID",
            width: "5%",
        },
        {
            title: "نوع",
            key: "ticketTitle",
            width: "5%",
        },
        {
            title: "نام",
            key: "customerName",
            width: "10%",
            render: (f, r) => (
                <span>
                    {r.customerFirstName + " " + r.customerLastName}
                </span>
            ),
        },
        {
            title: "نام کاربری",
            key: "userName",
            width: "10%",
        },
        {
            title: "ورودی کاربر",
            key: "value",
            width: "10%",
        },
        {
            title: "وضعیت",
            key: "status",
            width: "10%",
            render: (f) => convertStatus(f)
        },
        {
            title: "تاریخ ایجاد",
            key: "ticketCreatedDateTime",
            width: "10%",
        },
        {
            title: "تاریخ آخرین پیام",
            key: "lastResponseDateTime",
            width: "5%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./conversation/${r.ticketID}`} title="مشاهده تیکت">
                        <Icon key="message" type="message" />
                    </Link>
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                // onFinish={filterChangeHandler}
                // initialValues={{
                //     ...filter.ticket.list,
                //     dateFrom: gregorianToJalali(filter.ticket.list.dateFrom),
                //     dateTo: gregorianToJalali(filter.ticket.list.dateTo)
                // }}
            />
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                // handlerChange={paginationChangeHandler}
                data={ticketList}
                rowKey="ticketID"
            />
        </div>
    )
}

function convertStatus(num) {
    const status = {
        0: <span className="fail">در انتظار پاسخ</span>,
        1: <span className="warning">در حال بررسی</span>,
        2: <span className="success">پاسخ داده شده</span>,
        3: <span className="accent">بسته شده</span>,
        4: <span className="warning">در حال بررسی بخش مالی</span>,
        5: <span className="warning">در حال بررسی بخش انبار مرکزی</span>,
        6: <span className="warning">در حال بررسی بخش انبار لجستیک</span>,
        7: <span className="warning">در حال بررسی تولید </span>,

    }[num]

    return status
}