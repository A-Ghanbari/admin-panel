import RenderRoutes from 'routes';
import List from 'components/order/exit/List'
import Post from 'components/order/exit/actions/Post';
import Create from 'components/order/exit/actions/Create';

const ROUTES = [
    {
        key: 'exit',
        path: '/*',
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

export default Router;
