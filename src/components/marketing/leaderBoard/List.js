import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { deleteLeaderBoard, getLeaderBoardList } from "store/actions/leaderBoard"
import { LEADER_BOARD as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Filter from "components/marketing/leaderBoard/Filter"
import Card from "components/marketing/leaderBoard/Card"
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
            title: "لوگو",
            key: "logo",
            width: "5%",
            render: (f) => (
                <img src={f} width={35} height={35} alt="لوگو" />
            ),
        }, {
            title: "عنوان",
            key: "title",
            width: "5%",
        }, {
            title: "شرایط",
            key: "roles",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./reagent-condition/${r.ID}`} state={{ name: r.title }}>
                        <Icon key="marketers" type="marketers" title="شرط کد معرف" />
                    </Link>
                    <Link to={`./login-count/${r.ID}`} state={{ name: r.title }}>
                        <Icon key="enter" type="enter" title="شرط تعداد ورود" />
                    </Link>
                    <Link to={`./profile-condition/${r.ID}`} state={{ name: r.title }}>
                        <Icon key="roles" type="roles" title="شرط تکمیل پروفایل" />
                    </Link>
                    <Link to={`./order-condition/${r.ID}`} state={{ name: r.title }}>
                        <Icon key="cart" type="cart" title="شرط تعداد سفارش" />
                    </Link>
                    <Link to={`./price-condition/${r.ID}`} state={{ name: r.title }}>
                        <Icon key="price" type="price" title="شرط ارزش سفارش" />
                    </Link>
                    <Link to={`./products-condition/${r.ID}`} state={{ name: r.title }}>
                        <Icon key="accessories" type="accessories" title="شرط کالایی" />
                    </Link>
                    <Link to={`./questionnaire-condition/${r.ID}`} state={{ name: r.title }}>
                        <Icon key="questionnaire" type="questionnaire" title="شرط پرسشنامه" />
                    </Link>

                </div>
            ),
        }, {
            title: "بازی و جوایز",
            key: "game",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./game-condition/${r.ID}`} state={{ name: r.title }}>
                        <Icon key="game" type="game" title="بازی ها" />
                    </Link>
                    <Link to={`./prize-condition/${r.ID}`} state={{ name: r.title }}>
                        <Icon key="gift" type="gift" title="جایزه ها" />
                    </Link>
                </div>
            ),
        }, {
            title: "تاریخ شروع",
            key: "startDateTime",
            width: "10%",
        }, {
            title: "تاریخ پایان",
            key: "endDateTime",
            width: "10%",
        }, {
            title: "پیوند یکتا",
            key: "slug",
            width: "10%",
        }, {
            title: "حداکثر تعداد استفاده",
            key: "maxUser",
            width: "5%",
        }, {
            title: "تعداد فایل",
            key: "fileCount",
            width: "5%",
        }, {
            title: "تعداد استفاده",
            key: "customerUsed",
            width: "5%",
        }, {
            title: "وضعیت",
            key: "status",
            width: "10%",
            render: (f) => (
                f === 1 ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "ایجاد کننده",
            key: "userCreated",
            width: "5%",
        }, {
            title: "تاریخ ایجاد",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./edit/${r.ID}`}>
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف تابلو کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteLeaderBoard({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getLeaderBoardList({ ...filter.leaderBoard.list })
    }, [filter.leaderBoard.list, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            leaderBoard: {
                ...filter.leaderBoard,
                list: {
                    ...filter.leaderBoard.list,
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
                list: {
                    ...filter.leaderBoard.list,
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
                initialValues={filter.leaderBoard.list}
            />
            <ActionButton position="right">
                <Link to={"./create"}>
                    <Button
                        type="secondary-accent"
                        label="ایجا تابلو امتیاز جدید"
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