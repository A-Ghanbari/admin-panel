import { useEffect, useState } from "react"
import { FREQUENTLY_QUESTION as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { deleteFrequentQuestion, getItems } from "store/actions/frequentlyQuestions"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/FAQ/list/Filter"
import Card from "components/FAQ/list/Card"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import { useSelector } from "react-redux"
import { setFilter } from "store/actions/filter"
import { dispatch } from "store"
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
        },
        {
            title: "عنوان",
            key: "title",
            width: "5%",
        },
        {
            title: "فعال",
            key: "isActive",
            width: "5%",
            render: (f) => f ? <span className="approved" /> : <span className="unapproved" />
        },
        {
            title: "کاربر",
            key: "userCreated",
            width: "5%",
        },
        {
            title: "تاریخ",
            key: "createdDateTime",
            width: "10%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./edit/${r.ID}`} title="ویرایش">
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف رکورد "${r.title}" اطمینان دارید؟`}
                        onConfirm={() => deleteFrequentQuestion({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getItems(checkFilters({ ...filter.faq }))
    }, [filter.faq, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            faq: {
                ...filter.faq,
                ...values,
                pageIndex: 1
            }
        }))
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            faq: {
                ...filter.faq,
                pageIndex: index,
                pageSize: size,
            }
        }))
    }

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.faq }}
            />
            <ActionButton position="right">
                <Link to='./create'>
                    <Button
                        type="secondary-accent"
                        label="ایجاد سوال جدید"
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