import RenderRoutes from 'routes'
import ModifyLog from 'components/product/modifyLog'
import Detail from 'components/product/modifyLog/actions/detail'

const ROUTES = [
    {
        key: 'modify-log',
        path: '/*',
        private: true,
        component: <ModifyLog />,
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
