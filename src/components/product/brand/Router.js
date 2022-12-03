import RenderRoutes from 'routes'
import Brand from 'components/product/brand'
import Create from 'components/product/brand/actions/create'
import Edit from 'components/product/brand/actions/edit'

const ROUTES = [
    {
        key: 'brand',
        path: '/*',
        private: true,
        component: <Brand />,
    },
    {
        key: 'create',
        path: '/create',
        private: true,
        component: <Create />,
    },
    {
        key: 'edit',
        path: '/edit/:ID',
        private: true,
        component: <Edit />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
