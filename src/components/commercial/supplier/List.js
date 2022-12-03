import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { getSuppliers } from "store/actions/commercial"
import { SUPPLIER as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Filter from "components/commercial/supplier/Filter"
import Card from "components/commercial/supplier/Card"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const [province, setProvince] = useState({
        provinceID: " ",
        cityID: " ",
    })

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "کد",
            key: "ID",
            width: "5%",
        }, {
            title: "نام فروشگاه",
            key: "supplierName",
            width: "10%",
        }, {
            title: "نوع",
            key: "supplierType",
            width: "5%",
            render: (f, r) => (
                f === 1 ? "حقیقی" : "حقوقی"
            ),
        }, {
            title: "تعداد انبار",
            key: "warehouseCount",
            width: "5%",
        }, {
            title: "وضعیت لاگین",
            key: "loginActive",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "شهر",
            key: "cityName",
            width: "5%",
        }, {
            title: "شماره ثابت",
            key: "phone",
            width: "10%",

        }, {
            title: "شماره همراه",
            key: "mobile",
            width: "10%",
        }, {
            title: "ایمیل",
            key: "email",
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
        getSuppliers({ ...filter.commercial.suppliers })
    }, [filter.commercial.suppliers, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            commercial: {
                ...filter.commercial,
                suppliers: checkFilters({
                    ...filter.commercial.suppliers,
                    ...province,
                    ...values,
                    provinceAndCity: undefined,
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
                suppliers: {
                    ...filter.commercial.suppliers,
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
                    ...filter.commercial.suppliers,
                    dateFrom: gregorianToJalali(filter.commercial.suppliers.dateFrom),
                    dateTo: gregorianToJalali(filter.commercial.suppliers.dateTo)
                }}
                province={province}
                setProvince={setProvince}
            />
            <ActionButton position="right">
                <Button
                    type="secondary-accent"
                    label="ایجاد تامین کننده جدید"
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