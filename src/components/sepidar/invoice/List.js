import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { SEPIDAR_INVOICE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { addCommaToNumber, checkFilters } from "tools/utils"
import { getSepidarInvoice } from "store/actions/sepidar"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Card from "components/sepidar/invoice/Card"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector(
        (s) => s.filter
    )

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "فاکتور",
            key: "InvoiceID",
            width: "5%",
        }, {
            title: "مبلغ",
            key: "Price",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(Math.floor(r / 10))} تومان`,
        }, {
            title: "مبلغ خالص",
            key: "NetPrice",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(Math.floor(r / 10))} تومان`,
        }, {
            title: "تخفیف",
            key: "Discount",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(Math.floor(r / 10))} تومان`,
        }, {
            title: "مالیات",
            key: "Tax",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(Math.floor(r / 10))} تومان`,
        }, {
            title: "عوارض",
            key: "Duty",
            width: "10%",
            render: (r, f) => `${addCommaToNumber(Math.floor(r / 10))} تومان`,
        }, {
            title: "تاریخ",
            key: "ShamsiDate",
            width: "10%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon key="eye" type="eye" />
                </div>
            ),
        },
    ]

    useEffect(() => {
        getSepidarInvoice(checkFilters({ ...filter.sepidarInvoice }))
    }, [filter.sepidarInvoice])

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            sepidarInvoice: {
                ...filter.sepidarInvoice,
                pageIndex: index,
                pageSize: size,
            }
        }))
    }

    return (
        <div>
            <ActionButton position="right">
                <Button
                    type="secondary-accent"
                    label="ثبت فاکتور"
                />
            </ActionButton>
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                rowKey="InvoiceID"
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}