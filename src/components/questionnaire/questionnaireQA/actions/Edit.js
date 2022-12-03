import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editQuestionnaireQA, getQuestionnaireQADetail } from 'store/actions/questionnaire'
import { QUESTIONNAIRE_QA_DETAIL as entity } from "tools/utils/entities"
import { checkFilters } from "tools/utils"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import { ColumnGrid, Row } from "components/utils/grid"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import Skeleton from "components/utils/skeleton"
import { FormUpload } from "components/utils/form/items/FormUpload"
import { FormTextArea } from "components/utils/form/items/FormTextArea"
import { API_BASE_URL } from "tools/shared/constants"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit() {
    const navigate = useNavigate()
    const { ID } = useParams()

    useEffect(() => {
        getQuestionnaireQADetail({ ID })
    }, [ID])

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )
    const onFinish = (values) => {
        editQuestionnaireQA(checkFilters({
            ID,
            ...values,
            logo: (typeof values.logo === 'string') ? values.logo.replace(API_BASE_URL, "") : values.logo[0].response.path,
        }))
        navigate(-1)
    }

    return (
        <div className="section-card">
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>ویرایش گروه بندی "{data.title}"</h1>
                <Form
                    onFinish={onFinish}
                    initialValues={data}
                >
                    <Row className="filter-form">
                        <FormUpload
                            name="logo"
                            accept=".png,.jpg,.jpeg"
                            maxCount={1}
                            defaultFileList={[{
                                status: 'done',
                                url: data.logo,
                            }]}
                        />
                        <ColumnGrid col={fieldCol}>
                        <FormInput
                                name="questionCategoryTitle"
                                label="عنوان گروه"
                                required={true}
                            />
                            <FormInput
                                name="title"
                                label="عنوان"
                                required={true}
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
                        <ButtonWithConfirm />
                    </Row>
                </Form>
            </Skeleton>
        </div>
    )
}
