import RenderRoutes from 'routes'
import List from 'components/blog/tag/List'
import Create from 'components/blog/tag/actions/Create'
import Edit from 'components/blog/tag/actions/Edit'

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
    {
        key: 'edit',
        path: '/edit/:id',
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