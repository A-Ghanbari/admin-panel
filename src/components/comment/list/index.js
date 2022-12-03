import { useEffect, useState } from "react"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { useSelector } from "react-redux"
import { COMMENT as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import { getCommentsList } from "store/actions/comment"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Card from "components/comment/list/Card"
import Filter from "components/comment/list/Filter"
import Rate from "components/utils/rate"
import Link from "components/utils/link"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector(
        (s) => s.filter
    )

    useEffect(() => {
        getCommentsList(({ ...filter.comment }))
    }, [filter.comment])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            comment: checkFilters({
                ...filter.comment,
                ...values,
                pageIndex: 1
            })
        }))
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            comment: {
                ...filter.comment,
                pageIndex: index,
                pageSize: size,
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
            width: "5%",
        },
        {
            title: "امتیاز",
            key: "score",
            width: "5%",
            render: (f) => <Rate value={f} />
        },
        {
            title: "کد کالا",
            key: "productID",
            width: "5%",
        },
        {
            title: "کالا",
            key: "productName",
            width: "10%",
        },
        {
            title: "برند",
            key: "brandName",
            width: "10%",
        },
        {
            title: "تاریخ ارسال ",
            key: "createdDateTime",
            width: "10%",
        },
        {
            title: "کاربر",
            key: "customerName",
            width: "10%",
        },
        {
            title: "ایمیل ",
            key: "email",
            width: "10%",
        },
        {
            title: "وضعیت",
            key: "status",
            width: "5%",
            render: (f) => {
                const status = {
                    0: <span className="awaiting" title="در انتظار تایید " />,
                    1: <span className="unapproved" title="تایید نشده" />,
                    2: <span className="approved" title="تایید شده" />
                }[f]
                return status
            }
        },
        {
            title: "منتشر کننده",
            key: "userPublished",
            width: "5%",
        },
        {
            title: "تاریخ انتشار",
            key: "publishDateTime",
            width: "5%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./detail/${r.ID}`}>
                        <Icon key="eye" type="eye" />
                    </Link>
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{
                    ...filter.comment,
                    createdDateFrom: gregorianToJalali(filter.comment.createdDateFrom),
                    createdDateTo: gregorianToJalali(filter.comment.createdDateTo)
                }}
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