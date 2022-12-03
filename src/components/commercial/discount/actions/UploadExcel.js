import Form from 'components/utils/form'
import { ColumnGrid } from 'components/utils/grid'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormUpload from 'components/utils/form/items/FormUpload'
import { FormInput } from 'components/utils/form/items/FormInput'
import { useLocation } from 'react-router-dom'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 8 }
function UploadExcel() {
    const { state } = useLocation()

    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <div>
            < div className="form-card">
                <h1>آپلود فایل اکسل محصولات تخفیف حواله {state.title}</h1>
                <Form
                    onFinish={onFinish}
                >
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="preFactorId"
                            label="پیش فاکتور"
                            required={true}
                        />
                        <FormInput
                            name="factorId"
                            label="شماره فاکتور"
                            required={true}
                        />
                        <FormSelect
                            name="type"
                            label="نوع"
                            required={true}
                            items={[
                                {
                                    text: "تامین کننده",
                                    value: 1,
                                },
                                {
                                    text: "کالا",
                                    value: 2,
                                },
                            ]}
                        />
                    </ColumnGrid>
                    <h4>فایل اکسل محصولات را برای اعمال تخفیف حواله بارگذاری نمایید.</h4>
                    <FormUpload
                        name="file"
                        label="فایل"
                        maxCount={1}
                    />
                    <ButtonWithConfirm />
                </Form>
            </div>
        </div>
    )
}
export default UploadExcel