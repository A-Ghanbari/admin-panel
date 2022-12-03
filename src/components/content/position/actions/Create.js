import { useNavigate } from 'react-router-dom'
import { createContentPosition } from 'store/actions/content'
import Form from 'components/utils/form'
import { ColumnGrid, Row } from 'components/utils/grid'
import { FormInput } from 'components/utils/form/items/FormInput'
import { FormSelect } from 'components/utils/form/items/FormSelect'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'

export default function Create() {
    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
    const navigate = useNavigate()

    const onFinish = (values) => {
        createContentPosition({ ...values })
        navigate(-1)
    }

    return (
        <div className="section-card">
            <h1>ایجاد جایگاه</h1>
            <Form
                name="createPositionForm"
                onFinish={onFinish}
                initialValues={{
                    Type: 1,
                    IsActive: true
                }}
            >
                <Row className="edit-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name='Title'
                            label='عنوان'
                            required={true}
                        />
                        <FormSelect
                            name='Type'
                            label='نوع'
                            required={true}
                            items={[{
                                text: 'اسلایدر',
                                value: 1
                            }, {
                                text: 'بنر',
                                value: 2
                            }]}
                        />
                        <FormSelect
                            name='IsActive'
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
                    </ColumnGrid>
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}