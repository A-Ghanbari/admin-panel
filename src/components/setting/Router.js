import RenderRoutes from 'routes'
import Personal from 'components/setting/personal'
import ManagePages from 'components/setting/managePages/List'

const ROUTES = [
    {
        key: 'personal',
        path: '/personal/*',
        private: true,
        component: <Personal />,
    },
    {
        key: 'manage-pages',
        path: '/manage-pages/*',
        private: true,
        component: <ManagePages />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
