import ACL from 'components/ACL'
import { Divider as AntDivider } from 'antd'
import "components/utils/divider/divider.scss"

function Divider({ children, ...props }) {
    return (
        <AntDivider {...props}>
            {children}
        </AntDivider>
    )
}

export default ACL(Divider)