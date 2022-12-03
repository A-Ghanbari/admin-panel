import RenderRoutes from 'routes'
import CompanyRouter from 'components/post/company/Router'

const ROUTES = [
    {
        key: 'company',
        path: '/company/*',
        private: true,
        component: <CompanyRouter />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
