import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Tree from 'components/utils/field/tree'
import "components/utils/form/items/formItem.scss"

export function FormTextArea({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <Tree {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormTextArea)