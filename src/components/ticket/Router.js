import RenderRoutes from 'routes'
import ListRouter from 'components/ticket/list/Router'
import CategoryRouter from 'components/ticket/category/Router'
import RolesRouter from 'components/ticket/roles/Router'
import CloseRouter from 'components/ticket/close/Router'
import PointRouter from 'components/ticket/point/Router'
import Single from 'components/ticket/single'
import TemplateRouter from 'components/ticket/template/Router'

const ROUTES = [
    {
        key: 'list',
        path: '/list/*',
        private: true,
        component: <ListRouter />,
    },
    {
        key: 'category',
        path: '/category/*',
        private: true,
        component: <CategoryRouter />,
    },
    {
        key: 'roles',
        path: '/roles/*',
        private: true,
        component: <RolesRouter />,
    },
    {
        key: 'close',
        path: '/close/*',
        private: true,
        component: <CloseRouter />,
    },
    {
        key: 'point',
        path: '/point/*',
        private: true,
        component: <PointRouter />,
    },
    {
        key: 'single',
        path: '/single/*',
        private: true,
        component: <Single />,
    },
    {
        key: 'template',
        path: '/template/*',
        private: true,
        component: <TemplateRouter />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
