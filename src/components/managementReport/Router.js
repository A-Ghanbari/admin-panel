import RenderRoutes from 'routes';
import Sales from 'components/managementReport/Sales'
import Brand from 'components/managementReport/Brand'
import Product from 'components/managementReport/Product'
import Warehouse from 'components/managementReport/Warehouse'
import Invoice from 'components/managementReport/Invoice'
import Charge from 'components/managementReport/Charge'
import NotFound from 'components/notFound'

const ROUTES = [
    {
        key: 'sales',
        path: '/sales/*',
        private: true,
        component: <Sales />,
    }, {
        key: 'brand',
        path: '/brand/*',
        private: true,
        component: <Brand />,
    }, {
        key: 'product',
        path: '/product/*',
        private: true,
        component: <Product />,
    }, {
        key: 'warehouse',
        path: '/warehouse/*',
        private: true,
        component: <Warehouse />,
    }, {
        key: 'invoice',
        path: '/invoice/*',
        private: true,
        component: <Invoice />,
    }, {
        key: 'charge',
        path: '/charge/*',
        private: true,
        component: <Charge />,
    }, {
        key: 'notFound',
        path: '*',
        component: <NotFound />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
