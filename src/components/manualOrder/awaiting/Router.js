import RenderRoutes from 'routes'
import List from 'components/manualOrder/awaiting/List'
import Detail from 'components/manualOrder/awaiting/actions/detail'


const ROUTES = [
    {
        key: 'awaiting',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'detail',
        path: '/detail/:ID',
        private: true,
        component: <Detail />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
