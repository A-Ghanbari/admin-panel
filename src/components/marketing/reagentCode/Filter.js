import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormSelect from "components/utils/form/items/FormSelect"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"

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
                        <FormDatePicker
                            name="createdDateFrom"
                            label="تاریخ از"
                        />
                        <FormDatePicker
                            name="createdDateTo"
                            label="تاریخ تا"
                        />
                        <FormSelect
                            name="reason"
                            label="نوع"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "ثبت نام",
                                    value: 1,
                                },
                                {
                                    text: "ثبت سفارش",
                                    value: 2,
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
