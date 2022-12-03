import { useNavigate } from "react-router-dom"
import { createPrizes } from "store/actions/leaderBoard"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import { ColumnGrid, Row } from "components/utils/grid"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import FormTextArea from "components/utils/form/items/FormTextArea"
import FormUpload from "components/utils/form/items/FormUpload"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        createPrizes({
            ...values,
            Logo: values.Logo[0]?.response.path,
        })
        navigate(-1)
    }

    return (
        <div className="form-card">
            <h3>ایجاد جایزه جدید</h3>
            <Form
                onFinish={onFinish}
            >
                <Row className="filter-form">
                    <FormUpload
                        name="Logo"
                        label="آپلود تصویر"
                    />
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="Title"
                            label="عنوان"
                            required={true}
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
                                }
                            ]}
                        />
                    </ColumnGrid>
                    <FormTextArea
                        name="Description"
                        label="توضیحات"
                        required={true}
                    />
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}
