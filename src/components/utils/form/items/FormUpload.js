import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Upload from 'components/utils/upload'

export function FormUpload({ name, label, required, valuePropName = " ", ...props }) {
    const normFile = (e) => {
        if (Array.isArray(e)) return e
        return e?.fileList
    }

    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            valuePropName={valuePropName}
            getValueFromEvent={normFile}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <Upload {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormUpload)