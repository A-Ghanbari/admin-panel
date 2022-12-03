import RenderRoutes from 'routes'
import ListRouter from "components/manualOrder/list/Router"
import ExitRouter from "components/manualOrder/exit/Router"
import DepositRouter from "components/manualOrder/province/Router"
import AwaitingRouter from "components/manualOrder/awaiting/Router"

const ROUTES = [
    {
        key: 'list',
        path: '/list/*',
        private: true,
        component: <ListRouter />,
    },
    {
        key: 'exit',
        path: '/exit/*',
        private: true,
        component: <ExitRouter />,
    },
    {
        key: 'deposit',
        path: '/deposit/*',
        private: true,
        component: <DepositRouter />,
    },
    {
        key: 'awaiting',
        path: '/awaiting/*',
        private: true,
        component: <AwaitingRouter />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router