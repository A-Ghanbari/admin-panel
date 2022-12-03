import RenderRoutes from 'routes'
import List from 'components/sepidar/invoice/List'

const ROUTES = [
    {
        key: 'invoices',
        path: '/*',
        private: true,
        component: <List />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router