import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Radio from 'components/utils/field/radio'
import "components/utils/form/items/formItem.scss"

export function FormRadio({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            name={name}
            rules={[{ required, message: `انتخاب ${label} اجباری است` }]}
        >
            <Radio {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormRadio)