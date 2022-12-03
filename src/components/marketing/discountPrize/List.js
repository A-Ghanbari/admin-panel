import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { deleteDiscountPrize, getDiscountPrizeList } from "store/actions/leaderBoard"
import { DISCOUNT_PRIZE as entity } from "tools/utils/entities"
import { setFilter } from "store/actions/filter"
import { PAGE_SIZE } from "tools/shared/constants"
import { addCommaToNumber, checkFilters } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import Popconfirm from "components/utils/popconfirm"
import Card from "components/marketing/discountPrize/Card"
import Link from "components/utils/link"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getDiscountPrizeList(checkFilters({ ...filter.leaderBoard.discountPrizes }))
    }, [filter.leaderBoard.discountPrizes, reload])

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            leaderBoard: {
                ...filter.leaderBoard,
                discountPrizes: {
                    ...filter.leaderBoard.discountPrizes,
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
            title: "امتیاز",
            key: "point",
            width: "10%",
        },
        {
            title: "تعداد کاربر",
            key: "maxUsedPerUser",
            width: "10%",
        },
        {
            title: "انقصا(روز)",
            key: "expireDay",
            width: "10%",
        },
        {
            title: "نوع تخفیف",
            key: "discountType",
            width: "10%",
            render: (r) => {
                const orderTrans = {
                    1: "هزینه ارسال",
                    2: "سبد خرید",
                    3: "سبد هزینه ارسال + سبد خرید"
                }[r]
                return orderTrans
            }
        },
        {
            title: "درصدی",
            key: "isPercent",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
        {
            title: "مقدار تخفیف",
            key: "discount",
            width: "10%",
            render: (r, f) => f.isPercent ? `${r} درصد` : `${addCommaToNumber(r / 10)} تومان`
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
            title: "ایجاد کننده",
            key: "userCreated",
            width: "10%",
        },
        {
            title: "تاریخ ایجاد",
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
                        title={`آیا از حذف جوایز بازی با کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteDiscountPrize({ ID: r.ID })}
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
                        label="ایجاد جوایز بازی"
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