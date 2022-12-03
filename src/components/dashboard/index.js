import { useEffect } from "react";
import { useSelector } from "react-redux";
import DailySalesWidget from "components/dashboard/DailySalesWidget";
import DailyInvoiceWidget from "components/dashboard/DailyInvoiceWidget";
import MonthlySalesWidget from "components/dashboard/MonthlySalesWidget";
import MonthlyInvoiceWidget from "components/dashboard/MonthlyInvoiceWidget";
import ActiveUsersWidget from "components/dashboard/ActiveUsersWidget";
import LastOrderWidget from "components/dashboard/LastOrderWidget";
import WarehouseValueWidget from "components/dashboard/WarehouseValueWidget";
import WarehouseChargeWidget from "components/dashboard/WarehouseChargeWidget";
import BankWidget from "components/dashboard/‌BankWidget";
import CartWidget from "components/dashboard/CartWidget";
import SalesDiagram from "components/dashboard/SalesDiagram";
import InvoiceDiagram from "components/dashboard/InvoiceDiagram";
import { getCartAndBankData, getSalesData, getWarehouseData } from "store/actions/dashboard";
// import Skeleton from "components/utils/skeleton";
import { Row } from "components/utils/grid";
import useWindowSize from "hooks/useWindowSize";
// import { SALES_WIDGET as entity, WAREHOUSE_WIDGET as warehouseEntity, CART_BANK_WIDGET as bankEntity } from "tools/utils/entities"
import "components/dashboard/dashboard.scss"
import { bankData, warehouseData, widgets } from "tools/shared/dashboard";

export default function Dashboard() {

    const collapsedMenu = useSelector(s => s.collapsedMenu)
    const { width } = useWindowSize()

    const sm = width > 710 ? 12 : 24
    const md = width < 910 ? collapsedMenu ? 12 : 24 : 12
    const lg = width > 1100 ? collapsedMenu ? 8 : 12 : 12
    const xl = width < 1300 ? collapsedMenu ? 8 : 12 : 8
    const widgetCol = { sm: sm, md: md, lg: lg, xl: xl }

    // const { loading: salesLoading } = useSelector(
    //     (s) => s[entity.name]
    // );
    // const { loading: warehouseLoading } = useSelector(
    //     (s) => s[warehouseEntity.name]
    // );
    // const { loading: bankLoading } = useSelector(
    //     (s) => s[bankEntity.name]
    // );

    // const loading = salesLoading || warehouseLoading || bankLoading

    useEffect(() => {
        getSalesData()
        getWarehouseData()
        getCartAndBankData()
    }, [])

    return (
        <div>
            {/* <Skeleton
                loading={loading}
                avatar
                active
            > */}
                <Row gutter={[16, 0]}>
                    <DailySalesWidget
                        permission='dayWidgetPermission'
                        data={widgets}
                        widgetCol={widgetCol}
                    />
                    <DailyInvoiceWidget
                        permission='dayWidgetPermission'
                        data={widgets}
                        widgetCol={widgetCol}
                    />
                    <MonthlySalesWidget
                        permission='monthWidgetPermission'
                        data={widgets}
                        widgetCol={widgetCol}
                    />
                    <MonthlyInvoiceWidget
                        permission='monthWidgetPermission'
                        data={widgets}
                        widgetCol={widgetCol}
                    />
                </Row>
                <Row gutter={[16, 0]}>
                    <ActiveUsersWidget
                        permission='usersWidgetPermission'
                        data={widgets}
                        widgetCol={widgetCol}
                    />
                    <LastOrderWidget
                        permission='lastOrderWidgetPermission'
                        data={widgets}
                        widgetCol={widgetCol}
                    />
                    <WarehouseValueWidget
                        permission='productAvailableReport'
                        data={warehouseData}
                        widgetCol={widgetCol}
                    />
                    <WarehouseChargeWidget
                        permission='productLastCharged'
                        data={warehouseData}
                        widgetCol={widgetCol}
                    />
                    <BankWidget
                        permission='shoppingCartWidgetPermission'
                        data={bankData}
                        widgetCol={widgetCol}
                    />
                    <CartWidget
                        permission='shoppingCartWidgetPermission'
                        data={bankData}
                        widgetCol={widgetCol}
                    />
                </Row>
            {/* </Skeleton>
            <Skeleton
                loading={loading}
                avatar
                active
            > */}
                <Row gutter={[16, 0]}>
                    <SalesDiagram
                        permission='monthlySalesComparisonDiagramPermission'
                        data={widgets}
                    />
                    <InvoiceDiagram
                        permission='monthlyInvoicesComparisonDiagramPermission'
                        data={widgets}
                    />
                </Row>
            {/* </Skeleton> */}
        </div >
    )
}