import RenderRoutes from 'routes';
import ListRouter from 'components/customer/list/Router'
import WalletInfo from 'components/customer/wallet/List'

const ROUTES = [
    {
        key: 'list',
        path: '/list/*',
        private: true,
        component: <ListRouter />,
    }, {
        key: 'wallet',
        path: '/wallet/*',
        private: true,
        component: <WalletInfo />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
