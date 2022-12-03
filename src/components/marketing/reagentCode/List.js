import { useEffect, useState } from "react"
import { REAGENT_CODE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { addCommaToNumber, checkFilters, gregorianToJalali } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import { getReagentCodeList } from "store/actions/marketing"
import Filter from "components/marketing/reagentCode/Filter"
import CardItem from "components/marketing/reagentCode/Card"

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
            title: "نوع",
            key: "reasonName",
            width: "5%",
        }, {
            title: "حداقل تعداد سفارش کاربر",
            key: "itemCountStart",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(r)} عدد`,
        }, {
            title: "حداکثر تعداد سفارش کاربر",
            key: "itemCountEnd",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(r)} عدد`,
        }, {
            title: "درصدی",
            key: "isPercent",
            width: "10%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "وضعیت",
            key: "statusName",
            width: "10%",
        }, {
            title: "سازنده",
            key: "userCreated",
            width: "5%",
        }, {
            title: "تاریخ ساخت",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon key="add" type="add" />
                    <Icon key="edit" type="edit" />
                    <Icon key="delete" type="delete" />
                </div>
            ),
        },
    ]

    useEffect(() => {
        getReagentCodeList({ ...filter.marketing.reagentCode })
    }, [filter.marketing.reagentCode, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            marketing: {
                ...filter.marketing,
                reagentCode: checkFilters({
                    ...filter.marketing.reagentCode,
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
                reagentCode: {
                    ...filter.marketing.reagentCode,
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
                    ...filter.marketing.reagentCode,
                    createdDateFrom: gregorianToJalali(filter.marketing.reagentCode.createdDateFrom),
                    createdDateTo: gregorianToJalali(filter.marketing.reagentCode.createdDateTo)
                }}
            />
            <ActionButton position="right">
                <Button
                    type="secondary-accent"
                    label="ایجا کد جدید"
                />
            </ActionButton>
            <ListComposed
                entity={entity}
                columns={columns}
                card={CardItem}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}