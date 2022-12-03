
import { ColumnGrid, Row } from "components/utils/grid"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { createQuestionnaireQA } from "store/actions/questionnaire"
import { useNavigate, useParams } from "react-router-dom"
import { FormUpload } from "components/utils/form/items/FormUpload"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }
export default function Create() {
    const navigate = useNavigate()
    const { ID, parentID } = useParams()
    const onFinish = (values) => {
        createQuestionnaireQA({
            ...values,
            Logo: values.Logo && values.Logo[0].response.path,
            QuestionCategoryID: parentID,
            QuestionParentID: ID,
            IsAnswer: true
        }).then(() => { navigate(-1) })


    }

    return (
        <div className="form-card">

            <h3>ایجاد سوال</h3>
            <Form onFinish={onFinish}>
                <Row className="filter-form">
                    <FormUpload
                        name="Logo"
                        label="آپلود تصویر"
                    />
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="Title"
                            label="متن جواب"
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
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}
