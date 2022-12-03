import { API_BASE_URL } from 'tools/shared/constants'
import ACL from 'components/ACL'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormSelect from 'components/utils/form/items/FormSelect'
import WidgetCard from 'components/utils/widgetCard'

function BarcodeEdit() {

    return (
        <WidgetCard
            title="درج بارکد ها"
            des={
                <p>برای ویرایش <span className='success'>بارکد ها </span>به صورت <span className='warning'>گروهی </span>،از این قسمت استفاده نمایید. لیست بارکد ها باید در قالب یک <span className='warning'>فایل اکسل </span>در ورودی زیر وارد شود. برای دریافت فایل نمونه از لینک زیر استفاده نمایید. </p>
            }
            actions={[
                <ActionButton position="center">
                    <Button
                        type="primary-dark"
                        label="تایید"
                    />
                </ActionButton>
            ]}
        >
            <a href={`${API_BASE_URL}Content/templateExcel/add_barcode.xlsx`} target="blank">
                <p className='accent'>دریافت فایل نمونه</p>
            </a>
            <a href={`${API_BASE_URL}Content/templateExcel/change_barcode.xlsx`} target="blank">
                <p className='accent'>دریافت فایل نمونه</p>
            </a>
            {/* Ali , Hossein , fix upload button */}
            <Button
                label="بارگذاری"
            />
            <Form>
                <FormSelect
                    label="نوع فایل"
                    items={[
                        {
                            text: "اضافه کردن بارکد",
                            value: 0,
                        },
                        {
                            text: "ویرایش بارکد",
                            value: 1,
                        },
                    ]}
                />
            </Form>
        </WidgetCard>
    )
}

export default ACL(BarcodeEdit)
