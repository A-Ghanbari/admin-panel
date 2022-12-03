import RenderRoutes from 'routes'
import List from 'components/post/company/List'
import Create from 'components/post/company/actions/Create'
import Edit from 'components/post/company/actions/Edit'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'create',
        path: '/create',
        component: <Create />,
    }, {
        key: 'edit',
        path: '/edit/:ID',
        component: <Edit />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
