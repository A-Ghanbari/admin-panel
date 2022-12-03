import RenderRoutes from 'routes'
import Reports from 'components/widget/reports'
import ListOperations from 'components/widget/listOperations'

const ROUTES = [
    {
        key: 'reports',
        path: '/reports/*',
        private: true,
        component: <Reports />,
    },
    {
        key: 'list-operations',
        path: '/list-operations/*',
        private: true,
        component: <ListOperations />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
