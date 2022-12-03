import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { TICKET_CLOSE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { getTicketsClose } from "store/actions/ticket"
import ListComposed from "components/utils/listComposed"
import Filter from "components/ticket/close/Filter"
import Icon from "components/utils/field/Icon"
import Card from "components/ticket/close/Card"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Link from "components/utils/link"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getTicketsClose(checkFilters({ ...filter.ticket.close }))
    }, [filter.ticket.close, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            ticket: {
                ...filter.ticket,
                close: {
                    ...filter.ticket.close,
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
            ticket: {
                ...filter.ticket,
                close: {
                    ...filter.ticket.close,
                    pageIndex: index,
                    pageSize: size
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
            title: "نوع",
            key: "typeName",
            width: "5%",
        },
        {
            title: "تاریخ بستن",
            key: "startDateTime",
            width: "5%",
        },
        {
            title: "تاریخ باز کردن",
            key: "endDateTime",
            width: "10%",
        },
        {
            title: "فعال ",
            key: "isActive",
            width: "10%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
        {
            title: "تاریخ ایجاد",
            key: "createdDateTime",
            width: "10%",
        },
        {
            title: "کاربر ",
            key: "userCreatedName",
            width: "10%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon key="eye" type="eye" />
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.ticket.close }}
            />
            <ActionButton position="right">
                <Link to="./create/">
                    <Button
                        type="secondary-accent"
                        label="ایجاد رکورد جدید"
                    />
                </Link>
            </ActionButton>
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}