import RenderRoutes from 'routes';
import Dashboard from 'components/dashboard'

const ROUTES = [
    {
        key: 'dashboard',
        path: '/*',
        private: true,
        component: <Dashboard />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
