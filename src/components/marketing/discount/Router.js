import RenderRoutes from 'routes'
import List from 'components/marketing/discount/List'
import Cart from "components/marketing/discount/actions/cart"
import Order from "components/marketing/discount/actions/order"
import Product from "components/marketing/discount/actions/product"
import City from "components/marketing/discount/actions/city"
import Customer from "components/marketing/discount/actions/customer"
import Supplier from "components/marketing/discount/actions/supplier"

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    },
    {
        key: 'cart',
        path: 'cart/:ID',
        private: true,
        component: <Cart />,
    },
    {
        key: 'order',
        path: 'order/:ID',
        private: true,
        component: <Order />,
    },
    {
        key: 'product',
        path: 'product/:ID',
        private: true,
        component: <Product />,
    },
    {
        key: 'city',
        path: 'city/:ID',
        private: true,
        component: <City />,
    },
    {
        key: 'customer',
        path: 'customer/:ID',
        private: true,
        component: <Customer />,
    },
    {
        key: 'supplier',
        path: 'supplier/:ID',
        private: true,
        component: <Supplier />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router