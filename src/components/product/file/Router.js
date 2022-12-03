import RenderRoutes from 'routes'
import File from 'components/product/file'
import Create from 'components/product/file/actions/Create'
import Edit from 'components/product/file/actions/Edit'

const ROUTES = [
    {
        key: 'file',
        path: '/*',
        private: true,
        component: <File />,
    },{
        key: 'create',
        path: '/create',
        private: true,
        component: <Create />,
    },
    {
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
