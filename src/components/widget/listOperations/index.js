import { useEffect, useState } from "react"
import { Row } from 'components/utils/grid'

import CommercialRequestList from 'components/widget/listOperations/commercial/CommercialRequestList'

import AccountNumbersEdit from 'components/widget/listOperations/financial/AccountNumbersEdit'
import UpdateCommissionPaidForOrders from 'components/widget/listOperations/financial/UpdateCommissionPaidForOrders'
import OrderInvoicesFinancial from 'components/widget/listOperations/financial/OrderInvoicesFinancial'

import ChangeOrdersStatus from 'components/widget/listOperations/customers/ChangeOrdersStatus'
import SendBulkTickets from 'components/widget/listOperations/customers/SendBulkTickets'
import BarcodeEdit from 'components/widget/listOperations/customers/BarcodeEdit'

import ShipmentTrackingList from 'components/widget/listOperations/warehouse/ShipmentTrackingList'

import KeyWords from 'components/widget/listOperations/content/KeyWords'
import CategoriesColor from 'components/widget/listOperations/content/CategoriesColor'
import ProductsSort from 'components/widget/listOperations/content/ProductsSort'
import BrandSort from "components/widget/listOperations/content/BrandSort"

import "components/widget/widget.scss"

export default function ListOperations() {
    const [value, setValue] = useState({
        commercial: 0,
        financial: 0,
        customer: 0,
        warehouse: 0,
        content: 0
    })

    useEffect(() => {
        const commercial = document.getElementsByClassName('commercial-widgets')
        const financial = document.getElementsByClassName('financial-widgets')
        const customer = document.getElementsByClassName('customer-widgets')
        const warehouse = document.getElementsByClassName('warehouse-widgets')
        const content = document.getElementsByClassName('content-widgets')
        setValue({
            commercial: commercial[0].children.length,
            financial: financial[0].children.length,
            customer: customer[0].children.length,
            warehouse: warehouse[0].children.length,
            content: content[0].children.length
        })
    }, [])

    return (
        <div className='operations-widgets'>
            <div className={`${value.commercial === 0 && "hidden"}`}>
                <h1>بازرگانی</h1>
                <Row className="commercial-widgets">
                    <CommercialRequestList />
                </Row>
            </div>
            <div className={`${value.financial === 0 && "hidden"}`}>
                <h1>مالی</h1>
                <Row className="financial-widgets">
                    <AccountNumbersEdit />
                    <UpdateCommissionPaidForOrders />
                    <OrderInvoicesFinancial />
                </Row>
            </div>
            <div className={`${value.customer === 0 && "hidden"}`}>
                <h1>مشتریان</h1>
                <Row className="customer-widgets">
                    <ChangeOrdersStatus />
                    <SendBulkTickets />
                    <BarcodeEdit />
                </Row>
            </div>
            <div className={`${value.warehouse === 0 && "hidden"}`}>
                <h1>انبار</h1>
                <Row className="warehouse-widgets">
                    <ShipmentTrackingList />
                </Row>
            </div>
            <div className={`${value.content === 0 && "hidden"}`}>
                <h1>محتوا</h1>
                <Row className="content-widgets">
                    <KeyWords />
                    <CategoriesColor />
                    <ProductsSort />
                    <BrandSort />
                </Row>
            </div>
        </div>
    )
}
