import RenderRoutes from 'routes'
import List from 'components/role/user/List'
import Detail from 'components/role/user/actions/Detail'
import Create from 'components/role/user/actions/Create'
import ChangePassword from 'components/role/user/actions/ChangePassword'
import Edit from 'components/role/user/actions/Edit'

const ROUTES = [
    {
        key: 'user',
        path: '/*',
        private: true,
        component: <List />,
    },
    {
        key: 'detail',
        path: '/detail/:ID',
        private: true,
        component: <Detail />,
    },
    {
        key: 'edit',
        path: '/edit/:ID',
        private: true,
        component: <Edit />,
    },
    {
        key: 'change-password',
        path: '/change-password/:userName',
        private: true,
        component: <ChangePassword />,
    },
    {
        key: 'create',
        path: '/create/',
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