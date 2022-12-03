import { useSelector } from 'react-redux'
import { getSelectItems } from 'tools/utils'
import { PRIOD_LIST as periodEntity } from "tools/utils/entities"
import { API_BASE_URL } from 'tools/shared/constants'
import ACL from 'components/ACL'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormSelect from 'components/utils/form/items/FormSelect'
import WidgetCard from 'components/utils/widgetCard'

function UpdateCommissionPaidForOrders() {

    const { dataList } = useSelector(
        (s) => s[periodEntity.pluralizeName]
    )

    return (
        <WidgetCard
            title="تغییر وضعیت پرداخت سفارش های عودتی"
            des={
                <p>برای تغییر <span className='success'>تغییر وضعیت پرداخت سفارش های عودتی </span>به صورت <span className='warning'>گروهی </span>،از این قسمت استفاده نمایید. لیست سفارش ها باید در قالب یک <span className='warning'>فایل اکسل </span>در ورودی زیر وارد شود. برای دریافت فایل نمونه از لینک زیر استفاده نمایید. </p>
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
            <a href={`${API_BASE_URL}Content/templateExcel/test_updatecommissionpaid.xlsx`} target="blank">
                <p className='accent'>دریافت فایل نمونه</p>
            </a>
            {/* Ali , Hossein , fix upload button */}
            <Button
                label="بارگذاری"
            />
            <Form>
                <FormSelect
                    label="دوره زمانی"
                    items={getSelectItems(dataList)}
                />
                <FormSelect
                    label="وضعیت"
                    items={[
                        {
                            text: "پرداخت شده",
                            value: 0,
                        },
                        {
                            text: "پرداخت نشده",
                            value: 1,
                        },
                    ]}
                />
            </Form>
        </WidgetCard>
    )
}

export default ACL(UpdateCommissionPaidForOrders)
