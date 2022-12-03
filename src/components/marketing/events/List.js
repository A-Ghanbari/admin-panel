import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { deleteEvents, getEventsList } from "store/actions/leaderBoard"
import { EVENTS_LIST as entity } from "tools/utils/entities"
import { setFilter } from "store/actions/filter"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Popconfirm from "components/utils/popconfirm"
import Card from "components/marketing/events/Card"
import Filter from "components/marketing/events/Filter"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getEventsList(checkFilters({ ...filter.leaderBoard.events }))
    }, [filter.leaderBoard.events, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            leaderBoard: {
                ...filter.leaderBoard,
                events: {
                    ...filter.leaderBoard.events,
                    ...values,
                    pageIndex: 1,
                }
            }
        }))
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            leaderBoard: {
                ...filter.leaderBoard,
                events: {
                    ...filter.leaderBoard.events,
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
            title: "لوگو",
            key: "logo",
            width: "5%",
            render: (f, r) => (
                <img src={f} width="32" height="32" alt="تصویر" />
            ),
        },
        {
            title: "عنوان",
            key: "title",
            width: "10%",
        },
        {
            title: "والد",
            key: "parentTitle",
            width: "10%",
        },
        {
            title: "حداکثر کاربر",
            key: "maxUser",
            width: "10%",
        },
        {
            title: "تابلوی امتیاز",
            key: "leaderBoardTitle",
            width: "10%",
        },
        {
            title: "امتیاز",
            key: "point",
            width: "10%",
        },
        {
            title: "شروع بازه",
            key: "startDate",
            width: "10%",
        },
        {
            title: "پایان بازه",
            key: "endDate",
            width: "10%",
        },
        {
            title: "وضعیت",
            key: "status",
            width: "5%",
            render: (f) => (
                f === 1 ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Popconfirm
                        title={`آیا از حذف رویداد با کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteEvents({ ID: r.ID })}
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
                initialValues={filter.leaderBoard.events}
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