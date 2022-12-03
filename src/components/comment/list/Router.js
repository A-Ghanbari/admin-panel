import RenderRoutes from 'routes'
import List from 'components/comment/list'
import Detail from 'components/comment/list/actions/detail'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    },
    {
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
