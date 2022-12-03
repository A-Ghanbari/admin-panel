import FormSelect from "components/utils/form/items/FormSelect"
import FormInput from "components/utils/form/items/FormInput"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
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
                            name="title"
                            label="عنوان"
                        />
                        <FormDatePicker
                            name="publishDateFrom"
                            label="تاریخ انتشار از"
                        />
                        <FormDatePicker
                            name="publishDateTo"
                            label="تاریخ انتشار تا"
                        />
                        <FormSelect
                            name="isActive"
                            label="فعال"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                }, {
                                    text: "بلی",
                                    value: true,
                                }, {
                                    text: "خیر",
                                    value: false,
                                }
                            ]}
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>)
}
