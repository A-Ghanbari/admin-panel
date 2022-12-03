import ACL from "components/ACL"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import WidgetCard from "components/utils/widgetCard"
import FormDatePicker from "components/utils/form/items/FormDatePicker"

function SepidarReports() {
    return (
        <WidgetCard
            title="گزارش سپیدار"
            des={
                <p>
                    برای دریافت فایل اکسل
                    <span className="success"> سپیدار </span>در
                    <span className="warning"> هر دوره زمانی </span>،از این قسمت
                    استفاده نمایید.
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
            </Form>
        </WidgetCard>
    )
}

export default ACL(SepidarReports)
