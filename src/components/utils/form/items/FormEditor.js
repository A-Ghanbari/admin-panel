import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import Editor from 'components/utils/field/editor'
import "components/utils/form/items/formItem.scss"

export function FormEditor({ name, label, required, ...props }) {

    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            valuePropName='data'
            getValueFromEvent={(event, editor) => {
                const data = editor.getData()
                return data
            }}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <Editor editor={DecoupledEditor} {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormEditor)