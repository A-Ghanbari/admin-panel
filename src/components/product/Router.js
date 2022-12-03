import RenderRoutes from 'routes'
import BrandRouter from "components/product/brand/Router"
import GroupRouter from "components/product/group/Router"
import ColorRouter from "components/product/color/Router"
import FileRouter from "components/product/file/Router"
import ListRouter from "components/product/list/Router"
import AttributeRouter from "components/product/attribute/Router"
import ModifyLogRouter from "components/product/modifyLog/Router"
import LogRouter from "components/product/log/Router"

const ROUTES = [
    {
        key: 'brand',
        path: '/brand/*',
        private: true,
        component: <BrandRouter />,
    },
    {
        key: 'group',
        path: '/group/*',
        private: true,
        component: <GroupRouter />,
    },
    {
        key: 'color',
        path: '/color/*',
        private: true,
        component: <ColorRouter />,
    },
    {
        key: 'file',
        path: '/file/*',
        private: true,
        component: <FileRouter />,
    },
    {
        key: 'list',
        path: '/list/*',
        private: true,
        component: <ListRouter />,
    },
    {
        key: 'attribute',
        path: '/attribute/*',
        private: true,
        component: <AttributeRouter />,
    },
    {
        key: 'modify-log',
        path: '/modify-log/*',
        private: true,
        component: <ModifyLogRouter />,
    },
    {
        key: 'log',
        path: '/log/*',
        private: true,
        component: <LogRouter />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router