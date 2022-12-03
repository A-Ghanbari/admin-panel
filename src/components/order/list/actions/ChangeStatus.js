import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { ORDER as entity } from "tools/utils/entities"
import { changeOrderStatus, getItem } from 'store/actions/order'
import Form from 'components/utils/form'
import { ColumnGrid, Row } from 'components/utils/grid'
import FormSelect from 'components/utils/form/items/FormSelect'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'

function ChangeStatus() {
    const { ID } = useParams()
    let navigate = useNavigate()

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    useEffect(() => {
        getItem({ ID })
    }, [ID])

    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

    const onFinish = (values) => {
        let fieldsForSendToServer = {
            ID: ID,
            orderStatus: values.status ? 1 : 0,
        }
        changeOrderStatus(fieldsForSendToServer)
        navigate(-1)
    }

    return (
        <div className="section-card">
            <h1>وضعیت سفارش {data.orderProductsTotal?.orderID}</h1>
            <Form
                name="changeStatusForm"
                onFinish={onFinish}
                initialValues={data.paymentDetails}
                autoComplete="off"
            >
                <Row className="edit-form">
                    <ColumnGrid col={fieldCol}>
                        <FormSelect
                            name='status'
                            label='وضعیت سفارش'
                            items={
                                [{
                                    text: 'تایید شده',
                                    value: true
                                }, {
                                    text: 'در انتظار تایید',
                                    value: false
                                }]}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm loading={loading} />
                </Row>
            </Form>
        </div>
    )
}

export default ChangeStatus