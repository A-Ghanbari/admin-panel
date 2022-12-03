import RenderRoutes from 'routes';
import Warehouse from 'components/managementReport/Warehouse'
import Invoice from 'components/managementReport/Invoice'
import Charge from 'components/managementReport/Charge'
import NotFound from 'components/notFound'

const ROUTES = [
    {
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
