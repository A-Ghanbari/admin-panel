import { useEffect } from "react"
import { useSelector } from "react-redux"
import { MANUAL_ORDER_TYPE as entity } from "tools/utils/entities"
import { getManualOrderTypeList } from "store/actions/manualOrder"
import FormInput from "components/utils/form/items/FormInput"
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

    useEffect(() => {
        getManualOrderTypeList()
    }, [])

    const { data: manualOrderType } = useSelector(
        (s) => s[entity.name]
    )

    const type = [{ text: "همه", value: "" }]
    for (const item of manualOrderType) {
        type.push({
            text: item.title,
            value: item.ID
        })
    }
    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="OriginalOrderID"
                            label="کد سفارش اصلی "
                        />
                        <FormInput
                            name="ManualOrderID"
                            label="کد سفارش اپراتوری "
                        />
                        <FormSelectSearch
                            name="ManualOrderType"
                            label="نوع سفارش اپراتوری "
                            items={type}
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>
    )
}