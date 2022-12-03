import { useEffect, useState } from "react"
import { CONTENT_POSITION as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { deleteContentPosition, getContentPositions } from "store/actions/content"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Card from "components/content/position/Card"
import Filter from "components/content/position/Filter"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import Popconfirm from "components/utils/popconfirm"
import Link from "components/utils/link"

export default function Position() {
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
            width: "5%",
        }, {
            title: "نوع",
            key: "typeName",
            width: "5%",
        }, {
            title: "فعال",
            key: "isActive",
            width: "5%",
            render: (f) => f ? <span className="approved" /> : <span className="unapproved" />
        }, {
            title: "سازنده",
            key: "userCreated",
            width: "10%",
        }, {
            title: "تاریخ ایجاد ",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./edit/${r.ID}`} title="ویرایش جایگاه"><Icon key="edit" type='edit' /></Link>
                    <Popconfirm
                        title={`آیا از حذف جایگاه "${r.title}" اطمینان دارید؟`}
                        onConfirm={() => deleteContentPosition({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getContentPositions(checkFilters({ ...filter.content.position }))
    }, [filter.content.position, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            content: {
                ...filter.content,
                position: {
                    ...filter.content.position,
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
            content: {
                ...filter.content,
                position: {
                    ...filter.content.position,
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
                initialValues={{ ...filter.content.position }}
            />
            <ActionButton position="right">
                <Link to='./create'>
                    <Button
                        type="secondary-accent"
                        label="ایجاد جایگاه"
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