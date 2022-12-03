import { useSelector } from "react-redux"
import { PROVINCE_LIST as provinceEntity } from "tools/utils/entities"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormSelect from "components/utils/form/items/FormSelect"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({
    initialValues,
    onFinish,
}) {

    const provinceData = useSelector(
        (s) => s[provinceEntity.pluralizeName]
    )

    const province = [{ text: "همه", value: " " }]
    for (const item of provinceData) {
        province.push({
            text: item.text,
            value: item.value
        })
    }

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormDatePicker
                            name="orderDateFrom"
                            label="تاریخ از"
                        />
                        <FormDatePicker
                            name="orderDateTo"
                            label="تاریخ تا"
                        />
                        <FormSelectSearch
                            name="provinceID"
                            label="استان"
                            items={province}
                        />
                        <FormSelect
                            name="postCompanyID"
                            label="شرکت پستی"
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
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>
    )
}