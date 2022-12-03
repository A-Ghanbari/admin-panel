import { Layout } from 'antd'
import { useSelector } from 'react-redux'

const { Content: AntContent } = Layout
function Content(props) {
    const collapsed = useSelector(s => s.collapsedMenu)

    return (
        <AntContent {...props}>
            <div className={`content ${collapsed ? "content-close-sidebar" : ""}`}>
                {props.children}
            </div>
        </AntContent>
    )
}

export default Content
