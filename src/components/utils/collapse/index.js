import { Collapse as AntCollapse } from 'antd'
import "components/utils/collapse/collapse.scss"

const { Panel } = AntCollapse

function Collapse({ title, children, ...props }){
    return(
        <AntCollapse >
            <Panel header={title} {...props}>
                {children}
            </Panel>
        </AntCollapse>
    )
}

export default Collapse