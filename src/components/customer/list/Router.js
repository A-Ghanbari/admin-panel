import RenderRoutes from 'routes';
import List from 'components/customer/list/List'
import Detail from 'components/customer/list/actions/detail';
import Edit from 'components/customer/list/actions/edit';
import Wallet from 'components/customer/list/actions/wallet';

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
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
        key: 'wallet',
        path: '/wallet/:ID',
        private: true,
        component: <Wallet />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
