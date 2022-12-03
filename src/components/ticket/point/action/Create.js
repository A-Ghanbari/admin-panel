import { useNavigate } from 'react-router-dom'
import { createTicketsPoint } from 'store/actions/ticket'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import FormSelect from 'components/utils/form/items/FormSelect'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        createTicketsPoint(values)
        navigate(-1)
    }

    return (
        <div className="form-card">
            <h1>ایجاد امتیاز دهی جدید</h1>
            <Form
                onFinish={onFinish}
                initialValues={{ Score: 1, IsActive: true }}
            >
                <ColumnGrid col={fieldCol}>
                    <FormInput
                        name="Title"
                        label="عنوان"
                        required={true}
                    />
                    <FormSelect
                        name="Score"
                        label="امتیاز"
                        required={true}
                        items={[
                            {
                                text: "1",
                                value: 1
                            },
                            {
                                text: "2",
                                value: 2
                            },
                            {
                                text: "3",
                                value: 3
                            },
                            {
                                text: "4",
                                value: 4
                            },
                            {
                                text: "5",
                                value: 5
                            },
                        ]}
                    />
                    <FormInputNumber
                        name="Point"
                        label="ارزش امتیاز"
                        required={true}
                    />
                    <FormSelect
                        name="IsActive"
                        label="وضعیت"
                        required={true}
                        items={[
                            {
                                text: "غیر فعال",
                                value: false
                            },
                            {
                                text: "فعال",
                                value: true
                            },
                        ]}
                    />
                </ColumnGrid>
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}
