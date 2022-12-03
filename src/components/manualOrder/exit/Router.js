import RenderRoutes from 'routes'
import List from 'components/manualOrder/exit/List'
import Post from 'components/manualOrder/exit/actions/Post'
import Create from 'components/manualOrder/exit/actions/Create'


const ROUTES = [
    {
        key: 'exit',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'sendToPost',
        path: '/sendToPost/:ID',
        component: <Post />
    }, {
        key: 'create',
        path: '/create',
        component: <Create />
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
