import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { COMMERCIAL_DISCOUNT as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { deleteCommercialDiscount, getCommercialDiscount } from "store/actions/commercial"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Filter from "components/commercial/discount/Filter"
import Card from "components/commercial/discount/Card"
import Link from "components/utils/link"
import 'components/commercial/commercial.scss'
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
            title: "عنوان",
            key: "title",
            width: "10%",
        }, {
            title: "بنر",
            key: "backGroundImage",
            width: "5%",
            render: (f, r) => (
                <img src={f} width="32" height="32" />
            ),
        }, {
            title: "نوع",
            key: "typeName",
            width: "5%",
        }, {
            title: "کوک مجدد",
            key: "reCharge",
            width: "5%",
        }, {
            title: "فعال",
            key: "isActive",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "از تاریخ",
            key: "dateFrom",
            width: "5%",
        }, {
            title: "تا تاریخ",
            key: "dateTo",
            width: "5%",
        }, {
            title: "سازنده",
            key: "userCreated",
            width: "10%",
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
                    <Link
                        to={`./uploadExcel/${r.ID}`}
                        state={{ title: r.title }}
                        title="آپلود"
                    >
                        <Icon key="excelExport" type="excelExport" />
                    </Link>
                    <Link
                        to={`./edit/${r.ID}`}
                        title="ویرایش"
                    >
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف نخفیف با کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteCommercialDiscount({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getCommercialDiscount({ ...filter.commercial.discount })
    }, [filter.commercial.discount, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            commercial: {
                ...filter.commercial,
                discount: checkFilters({
                    ...filter.commercial.discount,
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
                discount: {
                    ...filter.commercial.discount,
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
                    ...filter.commercial.discount,
                    createdDateFrom: gregorianToJalali(filter.commercial.discount.createdDateFrom),
                    createdDateTo: gregorianToJalali(filter.commercial.discount.createdDateTo)
                }}
            />
            <ActionButton position="right">
                <Link to="./create">
                    <Button
                        type="secondary-accent"
                        label="ایجاد تخفیف جدید"
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