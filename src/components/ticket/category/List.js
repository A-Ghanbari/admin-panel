import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { TICKET_CATEGORY as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { deleteTicketsCategory, getTicketsCategory } from "store/actions/ticket"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/ticket/category/Filter"
import Card from "components/ticket/category/Card"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"


export default function Category() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getTicketsCategory(checkFilters({ ...filter.ticket.category }))
    }, [filter.ticket.category, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            ticket: {
                ...filter.ticket,
                category: {
                    ...filter.ticket.category,
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
                category: {
                    ...filter.ticket.category,
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
            title: "عنوان",
            key: "titleName",
            width: "5%",
        },
        {
            title: "دریافت اطلاعات",
            key: "hasValue",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
        {
            title: "عنوان اطلاعات",
            key: "valueName",
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
            title: "گروه بالاسری ",
            key: "parentName",
            width: "10%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./edit/${r.ID}`} title="ویرایش عنوان">
                        <Icon key="edit" type='edit' />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف عنوان کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteTicketsCategory({ ID: r.ID })}
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
                initialValues={{ ...filter.ticket.category }}
            />
            <ActionButton position="right">
                <Link to="./create/">
                    <Button
                        type="secondary-accent"
                        label="ایجاد عنوان جدید"
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