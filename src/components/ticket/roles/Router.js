import RenderRoutes from 'routes'
import Roles from 'components/ticket/roles/List'
import Create from 'components/ticket/roles/Create'

const ROUTES = [
    {
        key: 'roles',
        path: '/*',
        private: true,
        component: <Roles />,
    },
    {
        key: 'create',
        path: '/create/*',
        private: true,
        component: <Create />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
