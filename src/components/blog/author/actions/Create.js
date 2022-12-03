
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormTextArea from 'components/utils/form/items/FormTextArea'
import { ColumnGrid } from 'components/utils/grid'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import { createBlogAuthor } from 'store/actions/blog'
import { useNavigate } from 'react-router-dom'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        createBlogAuthor(values)
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <h1>ایجاد نویسنده جدید</h1>
            <Form
                onFinish={onFinish}
            >
                <ColumnGrid col={fieldCol}>
                    <FormInput
                        name="name"
                        label="نام"
                        required={true}
                    />
                    <FormInput
                        name="latinName"
                        label="نام(لاتین)"
                    />
                    <FormInput
                        name="canonical"
                        label="canonical"
                        required={true}
                    />
                    <FormSelect
                        name="isIndex"
                        label="isIndex"
                        required={true}
                        items={[
                            {
                                text: "فعال",
                                value: true
                            },
                            {
                                text: "غیرفعال",
                                value: false
                            },
                        ]}
                    />
                    <FormSelect
                        name="isFollow"
                        label="isFollow"
                        required={true}
                        items={[
                            {
                                text: "فعال",
                                value: true
                            },
                            {
                                text: "غیرفعال",
                                value: false
                            },
                        ]}
                    />
                </ColumnGrid>
                <FormTextArea
                    name="description"
                    label="توضیح کلی"
                />
                <FormTextArea
                    name="address"
                    label="آدرس"
                />
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}
