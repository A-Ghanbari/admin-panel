import ACL from "components/ACL"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormSelect from "components/utils/form/items/FormSelect"
import WidgetCard from "components/utils/widgetCard"

function AccListManualByDate() {
    return (
        <WidgetCard
            title="لیست تجمیعی سفارش های اپراتوری بر اساس تاریخ"
            des={
                <p>
                    برای دریافت
                    <span className="success"> لیست تجمیعی سفارش های اپراتوری بر اساس تاریخ </span>
                    از این قسمت استفاده نمایید.
                </p>
            }
            actions={[
                <ActionButton position="center">
                    <Button type="primary-dark" label="دریافت فایل" />
                </ActionButton>,
            ]}
        >
            <Form>
                <FormDatePicker label="تاریخ از" />
                <FormDatePicker label="تاریخ تا" />
                <FormSelect
                    name="postCompanyID"
                    label="پست"
                    items={[
                        {
                            text: "همه",
                            value: " ",
                        },
                        {
                            text: "پست پیشتاز (اشتهارد)",
                            value: "1",
                        },
                        {
                            text: "MAHEX",
                            value: "2",
                        },
                        {
                            text: "نفیس اکسپرس",
                            value: "3",
                        },
                    ]}
                />
                <FormSelect
                    name="transStatus"
                    label="وضعیت بارگیری"
                    items={[
                        {
                            text: "همه",
                            value: " ",
                        },
                        {
                            text: "بارگیری‌نشده",
                            value: 0,
                        },
                        {
                            text: "خروج از انبار",
                            value: 2,
                        },
                    ]}
                />
            </Form>
        </WidgetCard>
    )
}

export default ACL(AccListManualByDate)
