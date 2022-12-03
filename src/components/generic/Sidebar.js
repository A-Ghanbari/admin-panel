import { Layout } from 'antd';
import Menu from 'components/utils/menu'
import { useSelector } from 'react-redux';

const { Sider: AntSider } = Layout

function Sidebar() {
    const collapsed = useSelector(s => s.collapsedMenu)

    return (
        <AntSider
            className='sidebar'
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={0}
            breakpoint={"lg"}
        >
            <Menu />
        </AntSider >
    )
}

export default Sidebar
