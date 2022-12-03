import RenderRoutes from 'routes';
import ExitCentralExchange from 'components/centralExchange/exit'
import ListRouter from 'components/centralExchange/list/Router'
import BoxRouter from 'components/centralExchange/box/Router'

const ROUTES = [
    {
        key: 'exit',
        path: '/exit/*',
        private: true,
        component: <ExitCentralExchange />,
    }, {
        key: 'list',
        path: '/list/*',
        private: true,
        component: <ListRouter />,
    }, {
        key: 'box',
        path: '/box/*',
        private: true,
        component: <BoxRouter />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
