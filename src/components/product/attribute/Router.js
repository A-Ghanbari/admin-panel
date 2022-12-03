import RenderRoutes from 'routes'
import Attribute from 'components/product/attribute'
import Edit from 'components/product/attribute/actions/Edit'
import Create from 'components/product/attribute/actions/Create'

const ROUTES = [
    {
        key: 'attribute',
        path: '/*',
        private: true,
        component: <Attribute />,
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
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
