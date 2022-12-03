import RenderRoutes from 'routes'
import List from 'components/commercial/request/List'
import Create from 'components/commercial/request/actions/Create'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    },
    {
        key: 'create',
        path: '/create',
        private: true,
        component: <Create />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router