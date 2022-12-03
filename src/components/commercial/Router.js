import RenderRoutes from 'routes'
import SupplierRouter from 'components/commercial/supplier/Router'
import RequestRouter from 'components/commercial/request/Router'
import DiscountRouter from 'components/commercial/discount/Router'
import ManagementRequestRouter from 'components/commercial/managementRequest/Router'
import PricingRouter from 'components/commercial/pricing/Router'
import FinancialRequestRouter from 'components/commercial/financialRequest/Router'
import WarehouseRequestRouter from 'components/commercial/warehouseRequest/Router'

const ROUTES = [
    {
        key: 'supplier',
        path: '/supplier/*',
        private: true,
        component: <SupplierRouter />,
    },
    {
        key: 'request',
        path: '/request/*',
        private: true,
        component: <RequestRouter />,
    },
    {
        key: 'discount',
        path: '/discount/*',
        private: true,
        component: <DiscountRouter />,
    },
    {
        key: 'management-request',
        path: '/management-request/*',
        private: true,
        component: <ManagementRequestRouter />,
    },
    {
        key: 'pricing',
        path: '/pricing/*',
        private: true,
        component: <PricingRouter />,
    },
    {
        key: 'financial-request',
        path: '/financial-request/*',
        private: true,
        component: <FinancialRequestRouter />,
    },
    {
        key: 'warehouse-request',
        path: '/warehouse-request/*',
        private: true,
        component: <WarehouseRequestRouter />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
