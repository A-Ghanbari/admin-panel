import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import { InputNumber } from 'components/utils/field/input'
import "components/utils/form/items/formItem.scss"

export function FormInputNumber({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <InputNumber {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormInputNumber)