import { createPriceCondition } from "store/actions/leaderBoard"
import { checkFilters } from "tools/utils"
import Form from "components/utils/form"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"
import { FormInputNumber } from "components/utils/form/items/FormInputNumber"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create({ ID }) {

    const onFinish = (values) => {
        createPriceCondition(checkFilters({
            ...values,
            LeaderBoardID: ID,
        }))
    }

    return (
        <Form
            onFinish={onFinish}
            initialValues={{ Status: 1 }}
        >
            <ColumnGrid col={fieldCol}>
                <FormInputNumber
                    name="OrderPriceStart"
                    label="شروع بازه"
                    required={true}
                />
                <FormInputNumber
                    name="OrderPriceEnd"
                    label="پایان بازه"
                    required={true}
                />
                <FormInput
                    name="Point"
                    label="امتیاز"
                    required={true}
                />
                <FormInput
                    name="Message"
                    label="پیام"
                    required={true}
                />
                <FormDatePicker
                    name="StartDate"
                    label="تاریخ شروع"
                />
                <FormDatePicker
                    name="EndDate"
                    label="تاریخ پایان"
                />
                <FormSelect
                    name="Status"
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
