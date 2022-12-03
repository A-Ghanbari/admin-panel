import { useState } from 'react'
import { Upload as AntUpload } from 'antd'
import { uploadLargeFile } from 'store/actions/upload'
import Button from 'components/utils/field/button'
import Icon from 'components/utils/field/Icon'
import Modal from 'components/utils/modal'
import "components/utils/upload/upload.scss"

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export default function Upload({ type, url, ID, IDName, ...props }) {
    const [fileList, setFileList] = useState([])
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList)
    }

    const handleCancel = () => setPreviewVisible(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    return (
        <>
            <AntUpload
                name="uploadPicture"
                customRequest={(data) => uploadLargeFile(data, type)}
                listType="picture-card"
                onChange={onChange}
                onPreview={handlePreview}
                {...props}
            >
                {fileList.length < 1 && <Button icon={<Icon type='upload' />}>بارگذاری</Button>}
            </AntUpload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: 'fit-content',
                    }}
                    src={previewImage}
                />
            </Modal>
        </>
    )
}