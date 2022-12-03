import FormSelect from "components/utils/form/items/FormSelect"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish, }) {

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="productID"
                            label="کد کالا "
                        />
                        <FormDatePicker
                            name="createdDateFrom"
                            label="تاریخ از"
                        />
                        <FormDatePicker
                            name="createdDateTo"
                            label="تاریخ تا"
                        />
                        <FormSelect
                            name="status"
                            label="وضعیت"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "در انتظار تایید",
                                    value: 0,
                                },
                                {
                                    text: "تایید شده",
                                    value: 2,
                                },
                                {
                                    text: "تایید نشده",
                                    value: 1,
                                },
                            ]}
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>)
}
