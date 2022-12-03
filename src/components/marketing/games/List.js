import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { deleteGames, getGamesList } from "store/actions/leaderBoard"
import { GAMES_LIST as entity } from "tools/utils/entities"
import { setFilter } from "store/actions/filter"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import Popconfirm from "components/utils/popconfirm"
import Card from "components/marketing/games/Card"
import Link from "components/utils/link"
import "components/product/color/color.scss"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getGamesList(checkFilters({ ...filter.leaderBoard.games }))
    }, [filter.leaderBoard.games, reload])

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            leaderBoard: {
                ...filter.leaderBoard,
                games: {
                    ...filter.leaderBoard.games,
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
            width: "10%",
        },
        {
            title: "سازنده",
            key: "userCreated",
            width: "10%",
        },
        {
            title: "تاریخ ساخت",
            key: "createdDateTime",
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
            title: "تصویر",
            key: "logo",
            width: "5%",
            render: (f, r) => (
                <img src={f} width="32" height="32" alt="تصویر" />
            ),
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
                        title={`آیا از حذف بازی با کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteGames({ ID: r.ID })}
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
                        label="ایجاد بازی جدید"
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