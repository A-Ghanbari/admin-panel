import RenderRoutes from 'routes'
import List from 'components/manualOrder/list'
import Detail from 'components/manualOrder/list/actions/detail'

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

export default Router
