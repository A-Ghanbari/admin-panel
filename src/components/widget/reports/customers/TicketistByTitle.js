import ACL from "components/ACL"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import WidgetCard from "components/utils/widgetCard"

function TicketistByTitle() {
    return (
        <WidgetCard
            title="لیست تیکت طبق عنوان"
            des={
                <p>
                    برای دریافت فایل اکسل
                    <span className="success">لیست تیکت طبق عنوان </span>در
                    <span className="warning">یک بازه دلخواه </span>،از این قسمت
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

export default ACL(TicketistByTitle)
