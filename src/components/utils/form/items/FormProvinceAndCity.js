import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import ProvinceAndCity from 'components/utils/provinceAndCity'
import "components/utils/form/items/formItem.scss"

export function FormProvinceAndCity({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <ProvinceAndCity {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormProvinceAndCity)