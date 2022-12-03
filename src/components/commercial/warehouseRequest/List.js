import { useEffect, useState } from "react"
import { WAREHOUSE_REQUEST as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { getWarehouseRequest } from "store/actions/commercial"
import Filter from "components/commercial/warehouseRequest/Filter"
import Card from "components/commercial/warehouseRequest/Card"

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
            title: "تعداد درخواست",
            key: "requestCount",
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
            title: "توضیحات",
            key: "description",
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
        getWarehouseRequest({ ...filter.commercial.warehouseRequest })
    }, [filter.commercial.warehouseRequest])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            commercial: {
                ...filter.commercial,
                warehouseRequest: checkFilters({
                    ...filter.commercial.warehouseRequest,
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
                warehouseRequest: {
                    ...filter.commercial.warehouseRequest,
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
                    ...filter.commercial.warehouseRequest,
                    createdDateFrom: gregorianToJalali(filter.commercial.warehouseRequest.createdDateFrom),
                    createdDateTo: gregorianToJalali(filter.commercial.warehouseRequest.createdDateTo)
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