
import { useState } from 'react'
import { Upload as AntUpload } from 'antd'
import { uploadExcelFile } from 'store/actions/upload'
import Button from 'components/utils/field/button'
import Icon from 'components/utils/field/Icon'
import Form from 'components/utils/form'

export default function UploadForm({ initialValues, url, children, ...props }) {
    const [fileList, setFileList] = useState([])

    const onFinish = (values) => {
        const fields = [{ name: "file", value: fileList[0] }]
        for (const [key, value] of Object.entries(values)) {
            fields.push({ name: key, value: value })
        }

        uploadExcelFile(url, fields)
        setFileList([])
    }

    const beforeUpload = (file) => {
        setFileList([...fileList, file])
        return false
    }
    const onRemove = (file) => {
        const index = fileList.indexOf(file)
        const newFileList = fileList.slice()
        newFileList.splice(index, 1)
        setFileList(newFileList)
    }

    return (
        <Form onFinish={onFinish} initialValues={initialValues}>
            <h4>بارگذاری فایل</h4>
            <AntUpload
                beforeUpload={beforeUpload}
                onRemove={onRemove}
                accept=".xlsx"
                listType="picture-card"
                {...props}
            >
                {fileList.length < 1 && <Button icon={<Icon type='upload' />}>بارگذاری</Button>}
            </AntUpload>
            {children}
        </Form>
    )
}