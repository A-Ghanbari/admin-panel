import RenderRoutes from 'routes'
import List from 'components/marketing/leaderBoardDiscount/List'
import Customers from 'components/marketing/leaderBoardDiscount/actions/customers'
import Detail from 'components/marketing/leaderBoardDiscount/actions/detail'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    },
    {
        key: 'customers',
        path: '/customers/:ID',
        private: true,
        component: <Customers />,
    },
    {
        key: 'detail',
        path: '/detail/:ID',
        private: true,
        component: <Detail />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router