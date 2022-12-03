import RenderRoutes from 'routes'
import List from 'components/product/list'
import Create from 'components/product/list/actions/create'
import Detail from 'components/product/list/actions/detail'
import Warehouse from 'components/product/list/actions/warehouse'
import Preview from 'components/product/list/actions/Preview'
import Edit from 'components/product/list/actions/edit'
import Price from 'components/product/list/actions/Price'
import ChangeCount from 'components/product/list/actions/ChangeCount'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'create',
        path: '/create',
        private: true,
        component: <Create />,
    }, {
        key: 'detail',
        path: '/detail/:ID',
        private: true,
        component: <Detail />,
    }, {
        key: 'edit',
        path: '/edit/:ID',
        private: true,
        component: <Edit />,
    }, {
        key: 'warehouse',
        path: '/warehouse/:ID',
        private: true,
        component: <Warehouse />,
    }, {
        key: 'preview',
        path: '/preview/:ID',
        private: true,
        component: <Preview />,
    }, {
        key: 'price',
        path: '/price/:ID',
        private: true,
        component: <Price />,
    }, {
        key: 'change-count',
        path: '/change-count/:ID',
        private: true,
        component: <ChangeCount />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
