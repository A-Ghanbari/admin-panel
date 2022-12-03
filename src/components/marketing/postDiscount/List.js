import { useEffect, useState } from "react"
import { DISCOUNT as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { addCommaToNumber, checkFilters, gregorianToJalali } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import { getDiscountList } from "store/actions/marketing"
import Filter from "components/marketing/postDiscount/Filter"
import Card from "components/marketing/postDiscount/Card"

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
            key: "status",
            width: "10%",
            render: (f) => (
                f === 1 ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "تخفیف",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon key="edit" type="edit" />
                </div>
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
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon key="eye" type="eye" />
                    <Icon key="edit" type="edit" />
                    <Icon key="delete" type="delete" />
                </div>
            ),
        },
    ]

    useEffect(() => {
        getDiscountList({ ...filter.marketing.postDiscount })
    }, [filter.marketing.postDiscount, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            marketing: {
                ...filter.marketing,
                postDiscount: checkFilters({
                    ...filter.marketing.postDiscount,
                    ...values,
                    pageIndex: 1
                })
            }
        }))
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            marketing: {
                ...filter.marketing,
                postDiscount: {
                    ...filter.marketing.postDiscount,
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
                initialValues={{
                    ...filter.marketing.postDiscount,
                    startDateTime: gregorianToJalali(filter.marketing.postDiscount.startDateTime),
                    endDateTime: gregorianToJalali(filter.marketing.postDiscount.endDateTime)
                }}
            />
            <ActionButton position="right">
                <Button
                    type="secondary-accent"
                    label="ایجا تخفیف جدید"
                />
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