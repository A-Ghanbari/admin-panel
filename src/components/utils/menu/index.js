import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'store/actions/user'
import Icon from 'components/utils/field/Icon'
import 'components/utils/menu/menu.scss'
import useWindowSize from 'hooks/useWindowSize'
import { USER as entity } from "tools/utils/entities"
import { Menu as AntMenu } from 'antd'
import { cutString } from 'tools/utils'
import { menu } from 'tools/shared/menu'

const { SubMenu } = AntMenu

function Menu({ setVisible }) {
    const dispatch = useDispatch()
    const { data, pageAccess } = useSelector(
        (s) => s[entity.name]
    )

    const collapsed = useSelector((s) => s.collapsedMenu)
    const { width } = useWindowSize()
    const location = useLocation()
    const path = cutString(location.pathname, 1, location.pathname.length)
    const subMenu = path.split('/')[0]

    const closeDrawer = () => {
        if (width < 768) {
            setVisible(false)
        }
    }

    return (
        <>
            <AntMenu
                theme="dark"
                mode="inline"
                className={`sidebar-menu ${collapsed ? 'close-sidebar' : 'open-sidebar'
                    }`}
                defaultSelectedKeys={path || "dashboard"}
                defaultOpenKeys={[subMenu]}
            >
                <AntMenu.ItemGroup className="sidebar-header">
                    <AntMenu.Item key="logo" className="sidebar-logo" />
                </AntMenu.ItemGroup>

                {/* <AntMenu.Item key="userProfile" className="sidebar-menu-user">
                    <img src={data.photo} alt="عکس پروفایل" />
                    <h4>{data.fullName}</h4>
                </AntMenu.Item> */}

                {/* <AntMenu.Item
                    key="logOut"
                    className="sidebar-menu-logout"
                    icon={<Icon type="logOut" />}
                    onClick={() => dispatch(logout())}
                >
                    خروج از حساب کاربری
                </AntMenu.Item> */}
                <AntMenu.ItemGroup className="sidebar-content">
                    {menu.map((item) =>
                        !item.children.length ? (
                            <AntMenu.Item
                                key={item.action}
                                icon={<Icon type={item.name} />}
                                className="sidebar-menu-dashboard"
                                onClick={() => closeDrawer()}
                            >
                                <Link to={item.action}>{item.title}</Link>
                            </AntMenu.Item>
                        ) : (
                            <SubMenu
                                key={
                                    item.controller ? item.controller : item.name
                                }
                                icon={<Icon type={item.name} />}
                                title={item.title}
                                className="sidebar-submenu"
                            >
                                {item.children.map(
                                    (child) =>
                                        child.type === 1 && (
                                            <AntMenu.Item
                                                key={
                                                    child.action ? `${child.controller}/${child.action}` : child.name
                                                }
                                                className="sidebar-menu-item"
                                                onClick={() => closeDrawer()}
                                            >
                                                <Link
                                                    to={`${child.controller}/${child.action}`}
                                                >
                                                    {child.title}
                                                </Link>
                                            </AntMenu.Item>
                                        )
                                )}
                            </SubMenu>
                        )
                    )}
                </AntMenu.ItemGroup>
            </AntMenu>
        </>
    )
}

export default Menu
