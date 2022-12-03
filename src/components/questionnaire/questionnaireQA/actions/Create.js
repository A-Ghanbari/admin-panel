
import { ColumnGrid, Row } from "components/utils/grid"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import { createQuestionnaireQA } from "store/actions/questionnaire"
import { useNavigate } from "react-router-dom"
import { checkFilters } from "tools/utils"
import { FormTextArea } from "components/utils/form/items/FormTextArea"
import { FormUpload } from "components/utils/form/items/FormUpload"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        createQuestionnaireQA(
            checkFilters({ ...values, Logo: values.Logo[0].response.path }))
        navigate(-1)
    }

    return (
        <div className="form-card">
            <h3>ایجاد گروه بندی</h3>
            <Form
                onFinish={onFinish}
            >
                <Row className="filter-form">
                    <FormUpload
                        name="Logo"
                        label="آپلود تصویر"
                        required={true}
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
                        <FormSelect
                            name="isAnswer"
                            label="پاسخ"
                            required={true}
                            items={[
                                {
                                    text: "پاسخ داده شده",
                                    value: true
                                },
                                {
                                    text: "بدون پاسخ",
                                    value: false
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
