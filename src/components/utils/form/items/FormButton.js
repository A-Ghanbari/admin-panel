import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import "components/utils/form/items/formItem.scss"
import Button from 'components/utils/field/button'

export function FormButton({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <Button {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormButton)