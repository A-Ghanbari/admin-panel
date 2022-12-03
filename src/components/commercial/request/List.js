import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { getCommercialRequest } from "store/actions/commercial"
import { COMMERCIAL_REQUEST as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Filter from "components/commercial/request/Filter"
import Card from "components/commercial/request/Card"
import Link from "components/utils/link"

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
            title: "شناسه درخواست",
            key: "ID",
            width: "5%",
        }, {
            title: "پیش فاکتور",
            key: "preFactorId",
            width: "5%",
        }, {
            title: "شماره فاکتور",
            key: "factorId",
            width: "5%",
        }, {
            title: "عنوان",
            key: "title",
            width: "10%",
        }, {
            title: "تامین کننده",
            key: "supplierName",
            width: "5%",
        }, {
            title: "انبار تامین کننده",
            key: "supplierWarehouseName",
            width: "5%",
        }, {
            title: "نوع تحویل",
            key: "deliveryTypeName",
            width: "5%",
        }, {
            title: "تعداد محصول",
            key: "requestProductCount",
            width: "5%",
        }, {
            title: "در انتظار تایید مدیر",
            key: "waitForCommerceManager",
            width: "5%",

        }, {
            title: "در انتظار تایید انبار",
            key: "waitForWarehouseManager",
            width: "5%",
        }, {
            title: "تعداد تایید شده",
            key: "acceptedRequests",
            width: "5%",
        }, {
            title: "تعداد تایید نشده",
            key: "notAcceptedRequests",
            width: "5%",
        }, {
            title: "وضعیت",
            key: "statusName",
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
                    <Icon key="eye" type="eye" />
                    <Icon key="edit" type="edit" />
                    <Icon key="delete" type="delete" />
                </div>
            ),
        },
    ]

    useEffect(() => {
        getCommercialRequest({ ...filter.commercial.request })
    }, [filter.commercial.request, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            commercial: {
                ...filter.commercial,
                request: checkFilters({
                    ...filter.commercial.request,
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
                request: {
                    ...filter.commercial.request,
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
                    ...filter.commercial.request,
                    createdDateFrom: gregorianToJalali(filter.commercial.request.createdDateFrom),
                    createdDateTo: gregorianToJalali(filter.commercial.request.createdDateTo)
                }}
            />
            <ActionButton position="right">
                <Link to={'./create'}>
                    <Button
                        type="secondary-accent"
                        label="ایجاد درخواست گروهی"
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