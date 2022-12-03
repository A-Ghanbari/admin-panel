import RenderRoutes from 'routes'
import Log from 'components/product/log'

const ROUTES = [
    {
        key: 'log',
        path: '/*',
        private: true,
        component: <Log />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
