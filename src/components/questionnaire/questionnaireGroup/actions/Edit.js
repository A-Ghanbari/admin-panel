import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editQuestionnaireGroup, getQuestionnaireGroupDetail } from 'store/actions/questionnaire'
import { QUESTIONNAIRE_GROUP_DETAIL as entity } from "tools/utils/entities"
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
    const { parentID } = useParams()

    useEffect(() => {
        getQuestionnaireGroupDetail({ ID: parentID })
    }, [parentID])

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )
    const onFinish = (values) => {
        editQuestionnaireGroup({
            ...values,
            ID: parentID,
            logo: (typeof values?.logo === 'string') ? values?.logo?.replace(API_BASE_URL, "") : values?.logo[0]?.response?.path,
        }).finally(() => { navigate(-1) })

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
                        </ColumnGrid>
                        <FormTextArea
                            name="description"
                            label="توضیحات"
                            required={true}
                        />
                        <ButtonWithConfirm />
                    </Row>
                </Form>
            </Skeleton>
        </div>
    )
}
