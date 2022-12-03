import RenderRoutes from 'routes'
import List from 'components/role/setting/List'
import Create from 'components/role/setting/actions/Create'
import Users from 'components/role/setting/actions/Users'
import Edit from 'components/role/setting/actions/Edit'

const ROUTES = [
    {
        key: 'setting',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'create',
        path: '/create',
        private: true,
        component: <Create />,
    }, {
        key: 'users',
        path: '/users/:ID',
        private: true,
        component: <Users />,
    }, {
        key: 'edit',
        path: '/edit/:ID',
        private: true,
        component: <Edit />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router