import { useEffect, useState } from "react"
import { COMMERCIAL_PRICING as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { addCommaToNumber, checkFilters, gregorianToJalali } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import { getCommercialPricing } from "store/actions/commercial"
import Filter from "components/commercial/pricing/Filter"
import Card from "components/commercial/pricing/Card"

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
            title: "کد کالا",
            key: "productID",
            width: "5%",
        }, {
            title: "نام کالا",
            key: "productName",
            width: "10%",
        }, {
            title: "عکس کالا",
            key: "productPicLink",
            width: "5%",
            render: (f, r) => (
                <img src={f} width="32" height="32" />
            ),
        }, {
            title: "شماره حواله",
            key: "commerceID",
            width: "5%",
        }, {
            title: "قیمت قبلی",
            key: "priceOld",
            width: "5%",
            render: (r, f) => `${addCommaToNumber(Math.floor(r / 10))} تومان`,
        }, {
            title: "قیمت فعلی",
            key: "priceNew",
            width: "5%",
            render: (r, f) => `${addCommaToNumber(Math.floor(r / 10))} تومان`,
        }, {
            title: "ایجاد کننده",
            key: "userCreated",
            width: "10%",
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
        getCommercialPricing({ ...filter.commercial.pricing })
    }, [filter.commercial.pricing, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            commercial: {
                ...filter.commercial,
                pricing: checkFilters({
                    ...filter.commercial.pricing,
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
            commercial: {
                ...filter.commercial,
                pricing: {
                    ...filter.commercial.pricing,
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
                    ...filter.commercial.pricing,
                    createdDateFrom: gregorianToJalali(filter.commercial.pricing.createdDateFrom),
                    createdDateTo: gregorianToJalali(filter.commercial.pricing.createdDateTo)
                }}
            />
            <ActionButton position="right">
                <Button
                    type="secondary-dark"
                    label="آپلود فایل قیمت ها"
                />
                <Button
                    type="secondary-dark"
                    label="دانلود فایل نمونه"
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