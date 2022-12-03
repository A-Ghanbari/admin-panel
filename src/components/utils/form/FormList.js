import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'

function FormList({ children, ...props }) {
    return (
        <AntForm.List {...props}>
            {children}
        </AntForm.List>
    )
}

export default ACL(FormList)