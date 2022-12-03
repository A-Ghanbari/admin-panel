import { useEffect, useState } from "react"
import { Row } from "components/utils/grid"

import OrdersPaymentDetails from "components/widget/reports/financial/OrdersPaymentDetails"
import FinancialOrdersList from "components/widget/reports/financial/FinancialOrdersList"
import ProductsAccList from "components/widget/reports/financial/ProductsAccList"
import ReturnedOrdersList from "components/widget/reports/financial/ReturnedOrdersList"
import SepidarReports from "components/widget/reports/financial/SepidarReports"

import UserListByHPH from "components/widget/reports/customers/UserListByHPH"
import UserListByMobile from "components/widget/reports/customers/UserListByMobile"
import UserListByNationalCode from "components/widget/reports/customers/UserListByNationalCode"
import RepetitiveNamesList from "components/widget/reports/customers/RepetitiveNamesList"
import OrdersByPostalCode from "components/widget/reports/customers/OrdersByPostalCode"
import OrdersByCode from "components/widget/reports/customers/OrdersByCode"
import TicketistByTitle from "components/widget/reports/customers/TicketistByTitle"
import TicketListByCRM from "components/widget/reports/customers/TicketListByCRM"

import AccListByDate from "components/widget/reports/warehouse/AccListByDate"
import AccListManualByDate from "components/widget/reports/warehouse/AccListManualByDate"
import WarehouseLabelByOrderID from "components/widget/reports/warehouse/WarehouseLabelByOrderID"
import WarehouseLabels from "components/widget/reports/warehouse/WarehouseLabels"
import WarehouseInvoices from "components/widget/reports/warehouse/WarehouseInvoices"
import OrderProductCountList from "components/widget/reports/warehouse/OrderProductCountList"
import ProductSort from "components/widget/reports/warehouse/ProductSort"

import "components/widget/widget.scss"

export default function Reports() {
    const [value, setValue] = useState({
        financial: 0,
        customer: 0,
        warehouse: 0
    })

    useEffect(() => {
        const financial = document.getElementsByClassName('financial-widgets')
        const customer = document.getElementsByClassName('customer-widgets')
        const warehouse = document.getElementsByClassName('warehouse-widgets')
        setValue({
            financial: financial[0].children.length,
            customer: customer[0].children.length,
            warehouse: warehouse[0].children.length
        })
    }, [])

    return (
        <div className="reports-widgets">
            <div className={` ${value.financial === 0 && "hidden"}`}>
                <h1>مالی</h1>
                <Row className="financial-widgets">
                    <OrdersPaymentDetails />
                    <FinancialOrdersList />
                    <ProductsAccList />
                    <ReturnedOrdersList />
                    <SepidarReports />
                </Row>
            </div>
            <div className={` ${value.customer === 0 && "hidden"}`}>
                <h1>مشتریان</h1>
                <Row className="customer-widgets">
                    <UserListByHPH />
                    <UserListByMobile />
                    <UserListByNationalCode />
                    <RepetitiveNamesList />
                    <OrdersByPostalCode />
                    <OrdersByCode />
                    <TicketistByTitle />
                    <TicketListByCRM />
                </Row>
            </div>
            <div className={` ${value.warehouse === 0 && "hidden"}`}>
                <h1>انبار</h1>
                <Row className="warehouse-widgets">
                    <AccListByDate />
                    <AccListManualByDate />
                    <WarehouseLabelByOrderID />
                    <WarehouseLabels />
                    <WarehouseInvoices />
                    <OrderProductCountList />
                    <ProductSort />
                </Row>
            </div>
        </div>
    )
}
