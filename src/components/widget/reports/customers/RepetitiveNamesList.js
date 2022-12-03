import ACL from "components/ACL"
import { useSelector } from 'react-redux'
import { getSelectItems } from 'tools/utils'
import { PRIOD_LIST as periodEntity } from "tools/utils/entities"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormSelect from "components/utils/form/items/FormSelect"
import WidgetCard from "components/utils/widgetCard"

function RepetitiveNamesList() {

    const { dataList } = useSelector(
        (s) => s[periodEntity.pluralizeName]
    )

    return (
        <WidgetCard
            title="لیست نام های تکراری"
            des={
                <p>
                    برای دریافت فایل اکسل
                    <span className="success"> لیست نام های تکراری </span>از
                    <span className="warning"> یک دوره زمانی </span>،از این قسمت
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
                <FormSelect label="دوره زمانی"
                    items={getSelectItems(dataList)}
                />
            </Form>
        </WidgetCard>
    )
}

export default ACL(RepetitiveNamesList)
