import { editOrderCondition } from "store/actions/leaderBoard"
import { checkFilters, removeHoursFromDate } from "tools/utils"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"
import FormInputNumber from "components/utils/form/items/FormInputNumber"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit({ setType, initialValue, ID }) {
    const onFinish = (values) => {
        const fields = {
            ...values,
            LeaderBoardID: ID,
            ID: initialValue.ID,
            startDate: removeHoursFromDate(values.startDate),
            endDate: removeHoursFromDate(values.endDate)
        }
        editOrderCondition(checkFilters(fields))
    }

    return (
        <Form
            onFinish={onFinish}
            initialValues={initialValue}
        >
            <Button onClick={() => setType("create")} label="ایجاد" />

            <ColumnGrid col={fieldCol}>
                <FormInputNumber
                    name="orderCountStart"
                    label="شروع بازه"
                    required={true}
                />
                <FormInputNumber
                    name="orderCountEnd"
                    label="پایان بازه"
                    required={true}
                />
                <FormInputNumber
                    name="itemMinPrice"
                    label="حداقل سبد خرید"
                    required={true}
                />
                <FormInput
                    name="point"
                    label="امتیاز"
                    required={true}
                />
                <FormInput
                    name="message"
                    label="پیام"
                    required={true}
                />
                <FormDatePicker
                    name="startDate"
                    label="تاریخ شروع"
                />
                <FormDatePicker
                    name="endDate"
                    label="تاریخ پایان"
                />
                <FormSelect
                    name="status"
                    label="وضعیت"
                    required={true}
                    items={[
                        {
                            text: "فعال",
                            value: 1
                        },
                        {
                            text: "غیر فعال",
                            value: 2
                        },
                    ]}
                />
            </ColumnGrid>
            <ButtonWithConfirm />
        </Form>
    )
}
