import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { TICKET_POINT as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import { deleteTicketsPoint, getTicketsPoint } from "store/actions/ticket"
import Card from "components/ticket/point/Card"
import Filter from "components/ticket/point/Filter"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "عنوان",
            key: "title",
            width: "10%",
        }, {
            title: "امتیاز",
            key: "score",
            width: "5%",
        }, {
            title: "سازنده",
            key: "userCreated",
            width: "10%",
        }, {
            title: "تاریخ ایجاد",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "فعال",
            key: "isActive",
            width: "5%",
            render: (r, f) => r ? <span className="approved" /> : <span className="unapproved" />,
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./edit/${r.ID}`} title="ویرایش امتیاز">
                        <Icon key="edit" type='edit' />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف امتیاز "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteTicketsPoint({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getTicketsPoint(checkFilters({ ...filter.ticket.point }))
    }, [filter.ticket.point, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            ticket: {
                ...filter.ticket,
                point: {
                    ...filter.ticket.point,
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
                point: {
                    ...filter.ticket.point,
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
                initialValues={{ ...filter.ticket.point }}
            />
            <ActionButton position="right">
                <Link to={'./create'}>
                    <Button
                        type="secondary-accent"
                        label="ایجاد امتیاز جدید"
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