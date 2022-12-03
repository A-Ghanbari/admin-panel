import ACL from "components/ACL"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormSelect from "components/utils/form/items/FormSelect"
import WidgetCard from "components/utils/widgetCard"

function OrderProductCountList() {
    return (
        <WidgetCard
            title="تعداد اقلام کالاهای سفارش ها"
            des={
                <p>
                    برای دریافت <span className="success"> تعداد اقلام کالاهای سفارش ها </span>
                    در <span className="warning">هر زمانی </span> از این قسمت استفاده نمایید.
                </p>
            }
            actions={[
                <ActionButton position="center">
                    <Button type="primary-dark" label="دریافت فایل" />
                </ActionButton>,
            ]}
        >
            <Form>
                <FormDatePicker label="تاریخ" />

                <FormSelect
                    name="transStatus"
                    label="وضعیت انبار"
                    items={[
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

export default ACL(OrderProductCountList)
