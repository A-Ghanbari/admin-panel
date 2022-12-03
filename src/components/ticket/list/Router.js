import RenderRoutes from 'routes'
import List from 'components/ticket/list/List'
import Conversation from 'components/ticket/list/actions/Conversation'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    },
    {
        key: 'conversation',
        path: '/conversation/:ID',
        private: true,
        component: <Conversation />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
