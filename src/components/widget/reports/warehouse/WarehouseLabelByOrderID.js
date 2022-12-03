import ACL from "components/ACL"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import WidgetCard from "components/utils/widgetCard"

function WarehouseLabelByOrderID() {
    return (
        <WidgetCard
            title="برچسب انبار بر اساس کد سفارش"
            des={
                <p>
                    برای دریافت
                    <span className="success"> برچسب انبار (فقط سفارش های خروج از انبار) بر اساس کد سفارش </span>
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
                <FormInput label="کد سفارش" />
            </Form>
        </WidgetCard>
    )
}

export default ACL(WarehouseLabelByOrderID)
