import { useNavigate } from "react-router-dom"
import { createRoleSetting } from "store/actions/role"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import { ColumnGrid, Row } from "components/utils/grid"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        createRoleSetting(values)
        navigate(-1)
    }

    return (
        <div className="form-card">
            <h1>ایجاد نقش جدید</h1>
            <h4>برای ایجاد <span className="success">نقش </span>جدید ، نام آن را در ورودی زیر وارد نمایید.</h4>
            <Form
                onFinish={onFinish}
            >
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="name"
                            label="نام نقش"
                            required={true}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}
