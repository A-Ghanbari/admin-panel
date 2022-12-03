import { useEffect } from 'react'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Contact({ data, setContact }) {

    useEffect(() => {
        setContact(data)
    }, [])

    const onValuesChange = (changedValues, allValues) => {
        setContact(allValues)
    }

    return (
        <Form
            initialValues={data}
            onValuesChange={onValuesChange}
        >
            <ColumnGrid col={fieldCol}>
                <FormInput
                    name='cell'
                    label='موبایل'
                    required={true}
                />
                <FormInput
                    name='phone'
                    label='تلفن'
                />
                <FormInput
                    name='email'
                    label='ایمیل'
                />
            </ColumnGrid>
        </Form>
    )
}
