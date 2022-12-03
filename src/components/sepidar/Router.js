import RenderRoutes from 'routes'
import InvoiceRouter from 'components/sepidar/invoice/Router'

const ROUTES = [
    {
        key: 'invoices',
        path: '/invoices/*',
        private: true,
        component: <InvoiceRouter />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router