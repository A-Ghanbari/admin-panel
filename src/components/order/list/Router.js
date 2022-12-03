import RenderRoutes from 'routes';
import List from 'components/order/list/List'
import Detail from 'components/order/list/actions/detail'
import Edit from 'components/order/list/actions/Edit'
import ChangeStatus from 'components/order/list/actions/ChangeStatus';
import ManualOrder from 'components/order/list/actions/ManualOrder';

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'detail',
        path: '/detail/:ID',
        component: <Detail />,
    }, {
        key: 'edit',
        path: '/edit/:ID',
        component: <Edit />,
    }, {
        key: 'changeStatus',
        path: '/changeStatus/:ID',
        component: <ChangeStatus />,
    }, {
        key: 'createManual',
        path: '/createManual/:ID',
        component: <ManualOrder />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
