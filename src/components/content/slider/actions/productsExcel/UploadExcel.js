import API_SERVICES from 'tools/shared/apis'
import UploadForm from 'components/utils/upload/UploadForm'
import FormInput from 'components/utils/form/items/FormInput'
import Button from 'components/utils/field/button'

export default function UploadExcel({ ID }) {

    return (
        <>
            <h4>فایل اکسل لیست محصولات را بارگذاری نمایید.</h4>
            <UploadForm
                initialValues={{ sliderID: ID }}
                url={API_SERVICES.content.slider.uploadProductsExcel}
            >
                <FormInput
                    className="hidden"
                    name="sliderID"
                />
                <Button
                    type="primary-dark"
                    htmlType="submit"
                    label="بارگذاری"
                />
            </UploadForm>
        </>
    )
}
