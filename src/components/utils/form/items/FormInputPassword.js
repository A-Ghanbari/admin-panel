import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import { InputPassword } from 'components/utils/field/input'
import "components/utils/form/items/formItem.scss"

export function FormInputPassword({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[
                { required, message: `${label} اجباری است` },
                { min: 8, message: `${label} باید حداقل 8 کاراکتر باشد` }
            ]}
        >
            <InputPassword {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormInputPassword)