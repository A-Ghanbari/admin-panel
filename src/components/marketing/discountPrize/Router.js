import RenderRoutes from 'routes'
import List from 'components/marketing/discountPrize/List'
import Create from 'components/marketing/discountPrize/actions/Create'
import Edit from 'components/marketing/discountPrize/actions/Edit'


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