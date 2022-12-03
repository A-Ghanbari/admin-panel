import RenderRoutes from 'routes'
import Category from 'components/ticket/category/List'
import Create from 'components/ticket/category/actions/Create'
import Edit from 'components/ticket/category/actions/Edit'

const ROUTES = [
    {
        key: 'category',
        path: '/*',
        private: true,
        component: <Category />,
    },
    {
        key: 'create',
        path: '/create/*',
        private: true,
        component: <Create />,
    },
    {
        key: 'edit',
        path: '/edit/:ID',
        private: true,
        component: <Edit />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
