import RenderRoutes from 'routes'
import Group from 'components/product/group'
import Create from 'components/product/group/actions/create'
import Edit from 'components/product/group/actions/edit'
import CreateColor from 'components/product/group/actions/createColor'
import ColorList from 'components/product/group/actions/colorList/inedx'
import CreateAttribute from 'components/product/group/actions/createAttribute'
import Attribute from 'components/product/group/actions/attribute'

const ROUTES = [
    {
        key: 'group',
        path: '/*',
        private: true,
        component: <Group />,
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
    },
    {
        key: 'create-color',
        path: '/create-color',
        private: true,
        component: <CreateColor />,
    },
    {
        key: 'color-list',
        path: '/color-list',
        private: true,
        component: <ColorList />,
    },
    {
        key: 'attributes',
        path: '/attributes',
        private: true,
        component: <Attribute />,
    },
    {
        key: 'create-attribute',
        path: '/create-attribute',
        private: true,
        component: <CreateAttribute />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
