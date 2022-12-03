import RenderRoutes from 'routes'
import List from 'components/content/slider'
import Create from 'components/content/slider/actions/create'
import Edit from 'components/content/slider/actions/edit'
import ProductsExcel from 'components/content/slider/actions/productsExcel'

const ROUTES = [
    {
        key: 'slider',
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
    }, {
        key: 'productsExcel',
        path: '/productsExcel/:ID',
        private: true,
        component: <ProductsExcel />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
