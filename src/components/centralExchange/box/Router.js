import RenderRoutes from 'routes';
import List from 'components/centralExchange/box/List'
import Detail from 'components/centralExchange/box/actions/Detail'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'detail',
        path: '/detail/:ID',
        private: true,
        component: <Detail />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
