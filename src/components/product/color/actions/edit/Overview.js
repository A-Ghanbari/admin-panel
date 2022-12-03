import { useNavigate } from "react-router-dom"
import { editProductColor } from "store/actions/product"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import { ColumnGrid } from "components/utils/grid"
import FormInputColor from "components/utils/form/items/FormInputColor"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Overview({ data }) {
    const navigate = useNavigate()

    const onFinish = (values) => {
        editProductColor(values)
        navigate(-1)
    }

    return (
        <Form
            onFinish={onFinish}
            initialValues={data}
        >
            <ColumnGrid col={fieldCol}>
                <FormInput
                    name="title"
                    label="عنوان"
                    required={true}
                />
                <FormInputColor
                    name="colorCode"
                    isColorLess={true}
                />
                <FormSelect
                    name="isActive"
                    label="وضعیت"
                    items={[
                        {
                            text: "فعال",
                            value: true,
                        },
                        {
                            text: "غیر فعال",
                            value: false,
                        },
                    ]}
                />
            </ColumnGrid>
            <ButtonWithConfirm />
        </Form>
    )
}
