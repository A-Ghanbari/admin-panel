import RenderRoutes from 'routes'
import List from './List'
import Create from './actions/Create'
import Edit from './actions/Edit'


const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'createAnswer',
        path: '/createAnswer',
        private: true,
        component: <Create />,
    }, {
        key: 'editAnswer',
        path: '/editAnswer/:childID',
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