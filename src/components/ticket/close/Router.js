import RenderRoutes from 'routes'
import Close from 'components/ticket/close/List'
import Create from 'components/ticket/close/Create'

const ROUTES = [
    {
        key: 'close',
        path: '/*',
        private: true,
        component: <Close />,
    },
    {
        key: 'create',
        path: '/create/*',
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
