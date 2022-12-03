import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Select from 'components/utils/field/select'
import "components/utils/form/items/formItem.scss"

export function FormSelectSearch({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <Select {...props} showSearch/>
        </AntForm.Item>
    )
}

export default ACL(FormSelectSearch)