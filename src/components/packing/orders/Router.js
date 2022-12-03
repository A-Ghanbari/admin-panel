import RenderRoutes from 'routes'
import List from 'components/packing/orders/List'
import Detail from 'components/packing/orders/actions/details'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        component: <List />,
    }, {
        key: 'detail',
        path: '/detail/:ID',
        component: <Detail />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
