import { useLocation } from 'react-router-dom'
import { createGroupColor } from 'store/actions/product'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormInputColor from 'components/utils/form/items/FormInputColor'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function CreateColor() {
    const { state } = useLocation()

    const onFinish = (values) => {
        createGroupColor({
            ID: state.ID,
            categoryColors: [{ ...values }]
        })
    }

    return (
        <div className="form-card">
            <h1>ایجاد رنگ جدید برای گروه {state.name}</h1>
            <Form
                onFinish={onFinish}
            >
                <ColumnGrid col={fieldCol}>
                    <FormInput
                        name="Title"
                        label="عنوان"
                        required={true}
                    />
                    <FormInputColor
                        name="ColorCode"
                        isColorLess={true}
                    />
                </ColumnGrid>
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}
