import RenderRoutes from 'routes'
import SettingRouter from 'components/role/setting/Router'
import UserRouter from 'components/role/user/Router'

const ROUTES = [
    {
        key: 'setting',
        path: '/setting/*',
        private: true,
        component: <SettingRouter />,
    },
    {
        key: 'user',
        path: '/user/*',
        private: true,
        component: <UserRouter />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router