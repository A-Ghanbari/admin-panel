import { DateObject } from 'react-multi-date-picker'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { ORDER_WAREHOUSE_EXIT_POST_DELIVERY as entity } from "tools/utils/entities"
import { getPostDelivery, setPostDelivery } from 'store/actions/order'
import { convertDate } from 'tools/utils'
import Form from 'components/utils/form'
import { ColumnGrid, Row } from 'components/utils/grid'
import FormInput from 'components/utils/form/items/FormInput'
import FormTextArea from 'components/utils/form/items/FormTextArea'
import FormTimePicker from 'components/utils/form/items/FormTimePicker'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'

function Edit() {
    const { ID } = useParams()
    let navigate = useNavigate()
    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    useEffect(() => {
        getPostDelivery({ ID })
    }, [ID])

    const onFinish = (values) => {
        let finalModel = {
            ID: ID,
            deliveryDate: convertDate(values.deliveryDate),
            referredNumber: values.referredNumber,
            deliveryDescription: values.deliveryDescription,
        }
        setPostDelivery(finalModel)
        navigate(-1)
    }

    return (
        <div className="section-card">
            <h1>ثبت تاریخ تحویل به پست رکورد "{ID}"</h1>
            <Form
                name="EditPostForm"
                onFinish={onFinish}
                initialValues={{ referredNumber: data.referredNumber, deliveryDate: new DateObject() }}
                autoComplete="off"
            >
                <Row className="edit-form">
                    <ColumnGrid col={fieldCol}>
                        <FormTimePicker
                            name='deliveryDate'
                            label='تاریخ تحویل به پست'
                            required={true}
                        />
                        <FormInput
                            name='referredNumber'
                            label='شماره شناسه'
                            required={true}
                        />
                        <FormTextArea
                            name='deliveryDescription'
                            label='توضیحات'
                            count={200}
                            required={true}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm loading={loading} />
                </Row>
            </Form>
        </div>
    )
}

export default Edit