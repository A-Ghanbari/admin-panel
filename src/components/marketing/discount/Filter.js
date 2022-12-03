import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormSelect from "components/utils/form/items/FormSelect"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import FormInput from "components/utils/form/items/FormInput"

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
                        <FormSelect
                            name="discountType"
                            label="نوع تخفیف"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "هزینه پستی",
                                    value: 1,
                                },
                                {
                                    text: "سبد کالا",
                                    value: 2,
                                },
                            ]}
                        />
                        <FormSelect
                            name="isPercent"
                            label="درصدی"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "بلی",
                                    value: true,
                                },
                                {
                                    text: "خیر",
                                    value: false,
                                },
                            ]}
                        />
                        <FormSelect
                            name="status"
                            label="فعال"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "بلی",
                                    value: 1,
                                },
                                {
                                    text: "خیر",
                                    value: 0,
                                },
                            ]}
                        />
                        <FormInput
                            name="discountCode"
                            label="کد تخفیف"
                        />
                        <FormDatePicker
                            name="startDateTime"
                            label="تاریخ شروع"
                        />
                        <FormDatePicker
                            name="endDateTime"
                            label="تاریخ پایان"
                        />
                    </ColumnGrid>
                    <ActionButton position="center">
                        <Button name="submit" label="جستجو" htmlType="submit" />
                        <Button type="primary-dark" label="گزارش کد های تخفیف" />
                    </ActionButton>
                </Row>
            </Form>
        </Collapse>
    )
}
