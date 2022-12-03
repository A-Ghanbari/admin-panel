import RenderRoutes from 'routes'
import List from 'components/commercial/discount/List'
import Create from 'components/commercial/discount/actions/create'
import Edit from 'components/commercial/discount/actions/edit'
import UploadExcel from 'components/commercial/discount/actions/UploadExcel'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    },
    {
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
    }, {
        key: 'uploadExcel',
        path: '/uploadExcel/:ID',
        private: true,
        component: <UploadExcel />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router