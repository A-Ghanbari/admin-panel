import RenderRoutes from 'routes'
import List from 'components/blog/comment/List'
import Edit from 'components/blog/comment/actions/Edit'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    },
    {
        key: 'edit',
        path: '/edit/:id',
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