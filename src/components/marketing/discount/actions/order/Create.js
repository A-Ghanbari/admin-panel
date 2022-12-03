import { createDiscountOrder } from "store/actions/marketing"
import { checkFilters } from "tools/utils"
import Form from "components/utils/form"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create({ ID }) {

    const onFinish = (values) => {
        createDiscountOrder(checkFilters({
            ...values,
            BasicConditionID: ID
        }))
    }

    return (
        <Form
            onFinish={onFinish}
        >
            <ColumnGrid col={fieldCol}>
                <FormInputNumber
                    name="Count"
                    label="تعداد سفارش"
                    required={true}
                />
            </ColumnGrid>
            <ButtonWithConfirm />
        </Form>
    )
}
