import { useEffect, useState } from "react"
import { DISCOUNT as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { addCommaToNumber } from "tools/utils"
import ListComposed from "components/utils/listComposed"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { getDiscountList } from "store/actions/marketing"
import Card from "components/marketing/leaderBoardDiscount/Card"
import Link from "components/utils/link"
import Icon from "components/utils/field/Icon"

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
            width: "5%",
        }, {
            title: "نوع تخفیف",
            key: "discountTypeName",
            width: "5%",
        }, {
            title: "کد تخفیف",
            key: "discountCode",
            width: "5%",
        }, {
            title: "حداکثر کاربر",
            key: "maxUsedPerUser",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(r)} نفر`,
        }, {
            title: "حداکثر سفارش کاربر",
            key: "maxUsedPerOrder",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(r)} عدد`,
        }, {
            title: "تاریخ شروع",
            key: "startDateTime",
            width: "10%",
        }, {
            title: "تاریخ پایان",
            key: "endDateTime",
            width: "10%",
        }, {
            title: "درصدی",
            key: "isPercent",
            width: "10%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "مقدار تخفیف",
            key: "discount",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(Math.floor(r / 10))} تومان`,
        }, {
            title: "حداکثر قیمت",
            key: "maxPrice",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(Math.floor(r / 10))} تومان`,
        }, {
            title: "وضعیت",
            key: "isPublic",
            width: "10%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "تخفیف",
            key: "status",
            width: "10%",
            render: (f) => (
                f === 1 ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "سازنده",
            key: "userCreated",
            width: "5%",
        }, {
            title: "تاریخ ایجاد",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "شرط",
            key: "conditions",
            width: "5%",
            render: (f, r) => (
                <div className="actions" >
                    <Link to={`./customers/${r.ID}`} state={{ name: r.title }} title="مشتریان">
                        <Icon key="marketers" type="marketers" />
                    </Link>
                </div>
            ),
        }, {
            title: "عملیات",
            key: "actions",
            width: "5%",
            render: (f, r) => (
                <div className="actions" >
                    <Link to={`./detail/${r.ID}`} state={{ name: r.title }} title="جزئیات">
                        <Icon key="eye" type="eye" />
                    </Link>
                </div>
            ),
        }
    ]

    useEffect(() => {
        getDiscountList({ ...filter.marketing.leaderBoardDiscount })
    }, [filter.marketing.leaderBoardDiscount, reload])

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            marketing: {
                ...filter.marketing,
                leaderBoardDiscount: {
                    ...filter.marketing.leaderBoardDiscount,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    return (
        <div>
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}