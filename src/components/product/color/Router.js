import RenderRoutes from 'routes'
import Color from 'components/product/color'
import Create from 'components/product/color/actions/Create'
import Detail from 'components/product/color/actions/detail'
import Edit from 'components/product/color/actions/edit'

const ROUTES = [
    {
        key: 'color',
        path: '/*',
        private: true,
        component: <Color />,
    },
    {
        key: 'create',
        path: '/create',
        private: true,
        component: <Create />,
    }, {
        key: 'detail',
        path: '/detail/:ID',
        component: <Detail />,
    },
    {
        key: 'edit',
        path: '/edit/:ID',
        component: <Edit />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
