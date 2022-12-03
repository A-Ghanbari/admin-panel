import { useNavigate } from "react-router-dom"
import { createProductColor } from "store/actions/product"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import { ColumnGrid, Row } from "components/utils/grid"
import FormInputColor from "components/utils/form/items/FormInputColor"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        createProductColor(values)
        navigate(-1)
    }
    const initialValues = {
        isActive: true,
    }

    return (
        <div className="form-card">
            <h1>ایجاد رنگ جدید</h1>
            <Form
                onFinish={onFinish}
                initialValues={initialValues}
            >
                <Row className="filter-form">
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
                </Row>
            </Form>
        </div>
    )
}
