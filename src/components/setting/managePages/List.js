import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { getManagePages } from "store/actions/setting"
import { MANAGE_PAGE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/setting/managePages/Filter"
import Card from "components/setting/managePages/Card"

export default function ManagePages() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getManagePages(checkFilters({ ...filter.managePages }))
    }, [filter.managePages, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            managePages: {
                ...filter.managePages,
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
            managePages: {
                ...filter.managePages,
                pageIndex: index,
                pageSize: size
            }
        }))
    }

    const columns = [
        {
            title: "row",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "parentID",
            key: "parentID",
            width: "5%",
        },
        {
            title: "name",
            key: "name",
            width: "10%",
        },
        {
            title: "title",
            key: "title",
            width: "10%",
        },
        {
            title: "type ",
            key: "type",
            width: "5%",
        },
        {
            title: "sort",
            key: "sort",
            width: "5%",
        },
        {
            title: "controller",
            key: "controller",
            width: "10%",
        },
        {
            title: "action",
            key: "action",
            width: "10%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon title="ویرایش" key="edit" type='edit' />
                    <Icon title="حذف" key="delete" type='delete' />
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.managePages }}
            />
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}