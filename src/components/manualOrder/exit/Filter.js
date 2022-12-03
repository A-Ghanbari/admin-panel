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
                            name="orderDateFrom"
                            label="تاریخ از"
                        />
                        <FormDatePicker
                            name="orderDateTo"
                            label="تاریخ تا"
                        />
                        <FormSelect
                            name="status"
                            label="وضعیت "
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "بارگیری‌نشده",
                                    value: 0,
                                },
                                {
                                    text: "خروج از انبار",
                                    value: 2,
                                },
                                {
                                    text: "در انتظار بارکدخوان",
                                    value: 1,
                                },
                            ]}
                        />
                        <FormSelect
                            name="postCompanyID"
                            label="پست"
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
        </Collapse>)
}