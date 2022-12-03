import { useEffect, useState } from "react"
import { CAMPAIGN as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { addCommaToNumber, checkFilters, gregorianToJalali } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import { getCampaignList } from "store/actions/marketing"
import Filter from "components/marketing/campaign/Filter"
import Card from "components/marketing/campaign/Card"

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
            title: "تعداد کاربر",
            key: "customersUsed",
            width: "5%",
            render: (r, f) => `${addCommaToNumber(r)} نفر`,
        }, {
            title: "تعداد سفارش",
            key: "ordersUsed",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(r)} عدد`,
        }, {
            title: "رزرو در بانک",
            key: "bankReserved",
            width: "10%",
        }, {
            title: "عکس پس زمینه",
            key: "backgrounImage",
            width: "10%",
            render: (f, r) => (
                <img src={f} width="32" height="32" />
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
            title: "توضیحات",
            key: "description",
            width: "10%",
        }, {
            title: "وضعیت",
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
        getCampaignList({ ...filter.marketing.campaign })
    }, [filter.marketing.campaign, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            marketing: {
                ...filter.marketing,
                campaign: {
                    ...filter.marketing.campaign,
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
            marketing: {
                ...filter.marketing,
                campaign: {
                    ...filter.marketing.campaign,
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
                    ...filter.marketing.campaign,
                    createdDateFrom: gregorianToJalali(filter.marketing.campaign.createdDateFrom),
                    createdDateTo: gregorianToJalali(filter.marketing.campaign.createdDateTo)
                }}
            />
            <ActionButton position="right">
                <Button
                    type="secondary-accent"
                    label="ایجا کمپین پایه"
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