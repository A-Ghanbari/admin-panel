import { API_BASE_URL } from 'tools/shared/constants'
import ACL from 'components/ACL'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormSelect from 'components/utils/form/items/FormSelect'
import WidgetCard from 'components/utils/widgetCard'

function ChangeOrdersStatus() {

    return (
        <WidgetCard
            title="ویرایش وضعیت سفارش"
            des={
                <p>برای <span className='success'>ویرایش وضعیت سفارش </span>به صورت <span className='warning'>گروهی </span>،از این قسمت استفاده نمایید. لیست سفارش ها باید در قالب یک <span className='warning'>فایل اکسل </span>در ورودی زیر وارد شود. برای دریافت فایل نمونه از لینک زیر استفاده نمایید. </p>
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
            <a href={`${API_BASE_URL}Content/templateExcel/test_OrderChangeStatus.xlsx`} target="blank">
                <p className='accent'>دریافت فایل نمونه</p>
            </a>
            {/* Ali , Hossein , fix upload button */}
            <Button
                label="بارگذاری"
            />
            <Form>
                <FormSelect
                    label="وضعیت سفارش"
                    items={[
                        {
                            text: "در انتظار تایید",
                            value: 0,
                        },
                        {
                            text: "تایید شده",
                            value: 1,
                        },
                    ]}
                />
                <FormSelect
                    label="وضعیت بارگیری"
                    items={[
                        {
                            text: "خروج از انبار",
                            value: 0,
                        },
                        {
                            text: "بارگیری نشده",
                            value: 1,
                        },
                    ]}
                />
            </Form>
        </WidgetCard>
    )
}

export default ACL(ChangeOrdersStatus)
