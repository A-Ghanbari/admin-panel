import RenderRoutes from 'routes'
import List from 'components/ticket/template/List'
import Edit from 'components/ticket/template/actions/Edit'
import Create from 'components/ticket/template/actions/Create'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    },
    {
        key: 'edit',
        path: '/edit/:ID',
        private: true,
        component: <Edit />,
    },
    {
        key: 'create',
        path: '/create/*',
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
