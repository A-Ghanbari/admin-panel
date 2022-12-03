import { useEffect, useState } from "react"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { useSelector } from "react-redux"
import { TICKET_ROLE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { deleteTicketsRoles, getTicketsRoles } from "store/actions/ticket"
import ListComposed from "components/utils/listComposed"
import Icon from "components/utils/field/Icon"
import Card from "components/ticket/roles/Card"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import Popconfirm from "components/utils/popconfirm"
import Link from "components/utils/link"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getTicketsRoles(checkFilters({ ...filter.ticket.roles }))
    }, [filter.ticket.roles, reload])

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            ticket: {
                ...filter.ticket,
                roles: {
                    ...filter.ticket.roles,
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
            title: "نام کاربر",
            key: "userName",
            width: "5%",
        },
        {
            title: "کد کاربر",
            key: "userID",
            width: "5%",
        },
        {
            title: "عنوان دسترسی",
            key: "ticketTypeName",
            width: "10%",
        },
        {
            title: "تاریخ دسترسی",
            key: "updatedDateTime",
            width: "10%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Popconfirm
                        title={`آیا از حذف دسترسی کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteTicketsRoles({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    return (
        <div>
            <ActionButton position="right">
                <Link to="./create/">
                    <Button
                        type="secondary-accent"
                        label="ایجاد دسترسی جدید"
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