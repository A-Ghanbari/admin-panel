import { useEffect } from 'react'
import Form from 'components/utils/form'
import FormDatePicker from 'components/utils/form/items/FormDatePicker'
import FormInput from 'components/utils/form/items/FormInput'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormUpload from 'components/utils/form/items/FormUpload'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Info({ data, setInfo }) {

    useEffect(() => {
        setInfo(data)
    }, [])

    const onValuesChange = (changedValues, allValues) => {
        setInfo(allValues)
    }

    return (
        <Form
            initialValues={data}
            onValuesChange={onValuesChange}
        >
            <FormUpload
                name="picLink"
                maxCount={1}
                defaultFileList={[{
                    status: 'done',
                    url: data?.picLink,
                }]}
            />
            <ColumnGrid col={fieldCol}>
                <FormInput
                    name='userName'
                    label='نام کاربری'
                    required={true}
                    disabled
                />
                <FormInput
                    name='firstName'
                    label='نام'
                    required={true}
                />
                <FormInput
                    name='lastName'
                    label='نام خانوادگی'
                    required={true}
                />
                <FormInput
                    name='nationalCode'
                    label='کد ملی'
                />
                <FormDatePicker
                    name='birthDateString'
                    label='تاریخ تولد'
                />
                <FormSelect
                    name="gender"
                    label="جنسیت"
                    items={[{
                        text: "آقا",
                        value: true,
                    }, {
                        text: "خانم",
                        value: false,
                    }]}
                />
                <FormSelect
                    name="isActive"
                    label="وضعیت"
                    items={[{
                        text: "فعال",
                        value: true,
                    }, {
                        text: "غیر فعال",
                        value: false,
                    }]}
                />
            </ColumnGrid>
        </Form>
    )
}
