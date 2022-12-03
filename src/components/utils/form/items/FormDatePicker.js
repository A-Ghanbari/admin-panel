import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import DatePicker from 'components/utils/field/datePicker'
import "components/utils/form/items/formItem.scss"

export function FormDatePicker({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <DatePicker {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormDatePicker)