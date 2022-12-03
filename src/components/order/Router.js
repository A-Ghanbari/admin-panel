import RenderRoutes from 'routes';
import ListRouter from 'components/order/list/Router'
import ExitRouter from 'components/order/exit/Router'
import DepositRouter from 'components/order/province/Router'

const ROUTES = [
    {
        key: 'list',
        path: '/list/*',
        private: true,
        component: <ListRouter />,
    }, {
        key: 'exit',
        path: '/exit/*',
        private: true,
        component: <ExitRouter />,
    }, {
        key: 'deposit',
        path: '/deposit/*',
        private: true,
        component: <DepositRouter />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
