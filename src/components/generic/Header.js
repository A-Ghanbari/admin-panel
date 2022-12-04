import { useState } from 'react'
import { logout, setCollapsedMenu } from 'store/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'antd'
import Drawer from 'components/utils/drawer'
import Icon from 'components/utils/field/Icon'
import Menu from 'components/utils/menu'
import { cutString, getPageName, getTheme, setTheme } from 'tools/utils'
import { USER as entity } from "tools/utils/entities"
import 'assets/sass/header.scss'
import PageHeader from 'components/utils/pageHeader'
import { useLocation } from 'react-router-dom'
import useWindowSize from 'hooks/useWindowSize'

const { Header: AntHeader } = Layout

function Header() {
    const dispatch = useDispatch()
    const collapsedMenu = useSelector((s) => s.collapsedMenu)
    const [visible, setVisible] = useState(false)
    const location = useLocation()
    const path = cutString(location.pathname, 1, location.pathname.length)
    const pageInfo = getPageName(path)
    const { width } = useWindowSize()

    const { data, pageAccess } = useSelector(
        (s) => s[entity.name]
    )

    const changeTheme = () => {
        const theme = getTheme()
        if (theme === "dark") {
            document.body.classList.remove(theme)
            document.body.classList.add('light')
            setTheme("light")
        } else {
            document.body.classList.remove(theme)
            document.body.classList.add('dark')
            setTheme("dark")
        }
    }
    return (
        <AntHeader
            className={`header ${collapsedMenu ? 'header-close-sidebar' : 'header-open-sidebar'
                }`}
        >
            <div className="header-wrapper">
                <div className="header-fields">
                    <Icon
                        className="collapse-icon"
                        name="collapsedMenu"
                        key="collapsedMenu"
                        style={{ cursor: 'pointer' }}
                        type={collapsedMenu ? 'menuOpen' : 'menuClose'}
                        onClick={() =>
                            dispatch(setCollapsedMenu(!collapsedMenu))
                        }
                    />
                    <Icon
                        className="drawer-icon"
                        name="collapsedDrawer"
                        key="collapsedDrawer"
                        type="menu"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setVisible(true)}
                        icon={
                            <Icon type={visible ? 'menuOpen' : 'menuClose'} />
                        }
                    />
                    <Drawer
                        className="drawer"
                        width={250}
                        title=""
                        placement="right"
                        onClose={() => setVisible(false)}
                        visible={visible}
                        closable={false}
                        getContainer={false}
                    >
                        <Menu setVisible={setVisible} />
                    </Drawer>
                    {
                        width > 799 &&
                        <PageHeader
                            {...pageInfo}
                        />
                    }
                </div>
                <div className="sidebar-menu-user">

                    <h4>تست</h4>
                    <img src="https://joeschmoe.io/api/v1/random" alt="عکس پروفایل" />
                    <div
                        className="theme-icon"
                        style={{ cursor: 'pointer' }}
                        onClick={changeTheme}
                    />
                    <div className="header-icon" onClick={() => dispatch(logout())} title="خروج از حساب کاربری">
                        <Icon type="logOut" />
                    </div>
                </div>
            </div>
            {
                    width < 800 &&
                    <PageHeader
                        {...pageInfo}
                    />
                }
        </AntHeader>
    )
}

export default Header
