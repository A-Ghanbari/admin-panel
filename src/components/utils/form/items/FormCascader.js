import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Cascader from 'components/utils/field/cascader'
import "components/utils/form/items/formItem.scss"

export function FormCascader({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <Cascader {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormCascader)