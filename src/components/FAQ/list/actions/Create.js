import { createFrequentQuestion } from 'store/actions/frequentlyQuestions'
import Form from 'components/utils/form'
import { ColumnGrid, Row } from 'components/utils/grid'
import { FormInput } from 'components/utils/form/items/FormInput'
import { FormSelect } from 'components/utils/form/items/FormSelect'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import { FormTextArea } from 'components/utils/form/items/FormTextArea'
import { useNavigate } from 'react-router-dom'


export default function Create() {
    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
    const navigate = useNavigate()

    const onFinish = (values) => {
        createFrequentQuestion({ ...values })
        navigate(-1)
    }

    return (
        <div className="section-card">
            <h1>ایجاد سوال</h1>
            <Form
                name="EditFAQForm"
                onFinish={onFinish}
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
                    <FormTextArea
                        name='answer'
                        label='پاسخ'
                        count={1500}
                        required={true}
                    />
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}