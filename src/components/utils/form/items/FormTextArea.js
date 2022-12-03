import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import { TextArea } from 'components/utils/field/input'
import "components/utils/form/items/formItem.scss"

export function FormTextArea({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <TextArea {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormTextArea)