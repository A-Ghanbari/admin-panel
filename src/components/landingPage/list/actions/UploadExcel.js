import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Modal from 'components/utils/modal'
import UploadForm from 'components/utils/upload/UploadForm'
import API_SERVICES from 'tools/shared/apis'
import FormInput from 'components/utils/form/items/FormInput'

function UploadExcel({ show, change, ID }) {

    const handleConfirm = () => {
        change(true)
    }

    const handleCancel = () => {
        change(false)
    }

    return (
        <Modal
            visible={show}
            handleCancel={handleCancel}
            onCancel={handleConfirm}
            width={800}
            footer={
                <ActionButton position="center">
                    <Button
                        type="secondary-warning"
                        label="بستن"
                        onClick={() => change(false)}
                    />
                </ActionButton>
            }
        >
            <h1>آپلوداکسل</h1>
            <br></br>
            <h4>فایل اکسل لیست محصولات را بارگذاری نمایید.</h4>
            <br></br>
            <UploadForm
                initialValues={{ landingID: ID }}
                url={API_SERVICES.landingPage.uploadExcel}
            >
                <FormInput
                    className="hidden"
                    name="landingID"
                />
                <Button
                    type="primary-dark"
                    htmlType="submit"
                    label="بارگذاری"
                />
            </UploadForm>
        </Modal>
    )
}

export default UploadExcel