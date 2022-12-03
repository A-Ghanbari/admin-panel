import { useParams } from 'react-router-dom'
import API_SERVICES from 'tools/shared/apis'
import UploadForm from 'components/utils/upload/UploadForm'
import FormInput from 'components/utils/form/items/FormInput'
import Button from 'components/utils/field/button'

export default function UploadExcel() {
    const { ID } = useParams()

    return (
        <div>
            <h4>فایل اکسل <span className='accent'>لیست مشتریان</span> را بارگذاری نمایید.</h4>
            <UploadForm
                initialValues={{ BasicConditionID: ID }}
                url={API_SERVICES.marketing.discount.customer.uploadExcel}
            >
                <FormInput
                    className="hidden"
                    name="BasicConditionID"
                />
                <Button
                    type="primary-dark"
                    htmlType="submit"
                    label="بارگذاری"
                />
            </UploadForm>
        </div>
    )
}
