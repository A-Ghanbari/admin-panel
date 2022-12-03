import { Drawer as AntDrawer } from 'antd';
import "components/utils/drawer/drawer.scss"

function Drawer({ children, ...props }) {
    return (
        <AntDrawer {...props}>
            {children}
        </AntDrawer>
    )
}

export default Drawer;
