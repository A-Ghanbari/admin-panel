import RenderRoutes from 'routes'
import ListRouter from 'components/comment/list/Router'

const ROUTES = [
    {
        key: 'list',
        path: '/list/*',
        private: true,
        component: <ListRouter />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
