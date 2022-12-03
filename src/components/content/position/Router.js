import RenderRoutes from 'routes'
import List from 'components/content/position'
import Create from 'components/content/position/actions/Create'
import Edit from 'components/content/position/actions/Edit'

const ROUTES = [
    {
        key: 'position',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'create',
        path: '/create',
        private: true,
        component: <Create />,
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
