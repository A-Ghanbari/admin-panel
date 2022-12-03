import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { TICKET_TEMPLATE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { deleteTicketsTemplate, getTicketsTemplate } from "store/actions/ticket"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/ticket/template/Filter"
import Card from "components/ticket/template/Card"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getTicketsTemplate(checkFilters({ ...filter.ticket.template }))
    }, [filter.ticket.template, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            ticket: {
                ...filter.ticket,
                template: {
                    ...filter.ticket.template,
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
                template: {
                    ...filter.ticket.template,
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
            title: "عنوان",
            key: "title",
            width: "5%",
        },
        {
            title: "سازنده نمونه پاسخ",
            key: "userCreatedName",
            width: "5%",
        },
        {
            title: "نوع تیکت",
            key: "ticketTypeName",
            width: "10%",
        },
        {
            title: "تاریخ ایجاد ",
            key: "createdDateTime",
            width: "10%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./edit/${r.ID}`}>
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف پاسخ نمونه کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteTicketsTemplate({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.ticket.template }}
            />
            <ActionButton position="right">
                <Link to="./create/">
                    <Button
                        type="secondary-accent"
                        label="ایجاد نمونه پاسخ"
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