import RenderRoutes from 'routes'
import Register from "components/packing/register"
import Ranking from "components/packing/ranking"
import OrderRouter from "components/packing/orders/Router"

const ROUTES = [
    {
        key: 'ranking',
        path: '/ranking/*',
        private: true,
        component: <Ranking />,
    }, {
        key: 'orders',
        path: '/orders/*',
        private: true,
        component: <OrderRouter />,
    }, {
        key: 'register',
        path: '/register/*',
        private: true,
        component: <Register />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router