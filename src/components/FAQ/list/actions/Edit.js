import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FREQUENTLY_QUESTION as entity } from "tools/utils/entities"
import { useNavigate, useParams } from 'react-router-dom'
import { editFrequentQuestion, getItem } from 'store/actions/frequentlyQuestions'
import Form from 'components/utils/form'
import { ColumnGrid, Row } from 'components/utils/grid'
import { FormInput } from 'components/utils/form/items/FormInput'
import { FormSelect } from 'components/utils/form/items/FormSelect'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import { formatQuillValue } from 'tools/utils'
import { TextArea } from 'components/utils/field/input'


export default function Edit() {
    const [answerValue, setAnswerValue] = useState("")
    const navigate = useNavigate()

    const { ID } = useParams()
    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    useEffect(() => {
        getItem({ ID })
    }, [ID])

    useEffect(() => {
        setAnswerValue(formatQuillValue(data.answer))
    }, [data])

    const onFinish = (values) => {
        let serviceField = {
            ID: ID,
            answer: answerValue,
            ...values,
        }
        editFrequentQuestion(serviceField)
        navigate(-1)
    }

    return (
        <div className="section-card">
            <h1>ویرایش سوال "{data?.title}"</h1>
            <Form
                name="EditFAQForm"
                onFinish={onFinish}
                initialValues={data}
                autoComplete="off"
            >
                <Row className="edit-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name='title'
                            label='عنوان'
                            required={true}
                        />
                        <FormInput
                            name='sortNumber'
                            label='ترتیب نمایش'
                            required={true}
                        />
                        <FormSelect
                            name='isActive'
                            label='وضعیت'
                            required={true}
                            items={[{
                                text: 'فعال',
                                value: true
                            }, {
                                text: 'غیر فعال',
                                value: false
                            }]}
                        />
                        <FormInput
                            name='question'
                            label='سوال'
                            required={true}
                        />
                    </ColumnGrid>
                    <TextArea
                        name='answerValue'
                        label='پاسخ'
                        count={1500}
                        value={answerValue}
                        onChange={(e) => setAnswerValue(e.target.value)}
                    />
                    <ButtonWithConfirm loading={loading} />
                </Row>
            </Form>
        </div>
    )
}