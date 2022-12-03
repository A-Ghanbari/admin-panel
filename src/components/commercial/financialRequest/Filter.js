import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import FormSelect from "components/utils/form/items/FormSelect"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({
    initialValues,
    onFinish,
}) {

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormSelectSearch
                            name="SupplierWarehouseID"
                            label="انبار"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                            ]}
                        />
                        <FormSelect
                            name="supplierID"
                            label="تامین کننده"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                            ]}
                        />
                        <FormSelect
                            name="ClearingPriceType"
                            label="نوع پرداخت"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "نقدی",
                                    value: 1,
                                },
                                {
                                    text: "غیر نقدی",
                                    value: 2,
                                },
                                {
                                    text: "امانی",
                                    value: 3,
                                },
                                {
                                    text: "هدیه",
                                    value: 4,
                                }
                            ]}
                        />
                        <FormDatePicker
                            name="createdDateFrom"
                            label="تاریخ از"
                        />
                        <FormDatePicker
                            name="createdDateTo"
                            label="تاریخ تا"
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>
    )
}
