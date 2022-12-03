import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import DatePicker from 'components/utils/field/datePicker'
import TimePicker from "react-multi-date-picker/plugins/time_picker"
import "components/utils/form/items/formItem.scss"

export function FormTimePicker({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <DatePicker
                format="YYYY/MM/DD HH:mm:ss"
                plugins={[
                    <TimePicker position="bottom" />
                ]}
                {...props}
            />
        </AntForm.Item>
    )
}

export default ACL(FormTimePicker)