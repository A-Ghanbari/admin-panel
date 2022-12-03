import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import { Input } from 'components/utils/field/input'
import "components/utils/form/items/formItem.scss"

export function FormInput({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <Input {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormInput)