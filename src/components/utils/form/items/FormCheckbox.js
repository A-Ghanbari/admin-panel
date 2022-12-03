import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Checkbox from 'components/utils/checkbox'
import "components/utils/form/items/formItem.scss"

export function FormCheckbox({ name, label, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            name={name}
            valuePropName="checked"
        >
            <Checkbox label={label} {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormCheckbox)