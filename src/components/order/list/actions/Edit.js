import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { editOrderInfo, getItem } from 'store/actions/order'
import Form from 'components/utils/form'
import { ColumnGrid, Row } from 'components/utils/grid'
import { isEmpty } from 'lodash'
import { ORDER as entity } from "tools/utils/entities"
import FormInput from 'components/utils/form/items/FormInput'
import FormProvinceAndCity from 'components/utils/form/items/FormProvinceAndCity'
import FormTextArea from 'components/utils/form/items/FormTextArea'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'

function Edit() {
    // const { ID } = useParams()
    // let navigate = useNavigate()
    // const [province, setProvince] = useState([])

    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

    // const { data, loading } = useSelector(
    //     (s) => s[entity.name]
    // )

    // useEffect(() => {
    //     getItem({ ID })
    // }, [ID])

    // useEffect(() => {
    //     if (!isEmpty(data)) {
    //         setProvince([data.orderDetailReceiver.receiverProvinceID.toString(), data.orderDetailReceiver.receiverCityID.toString()])
    //     }
    // }, [data])

    // const onFinish = (values) => {
    //     let fieldsForSendToServer = {
    //         ID: ID,
    //         customerName: values.receiverName,
    //         customerCell: values.receiverMobile,
    //         postalCode: values.receiverPostalCode,
    //         provinceID: province[0],
    //         cityID: province[1],
    //         address: values.receiverAddress,
    //     }
    //     editOrderInfo(fieldsForSendToServer)
    //     navigate(-1)
    // }

    return (
        <div className="section-card">
            <h1>جزییات سفارش </h1>
            <Form
                name="EditForm"
                // onFinish={onFinish}
                initialValues={{
                    receiverName:"تست",
                    receiverMobile:"09129999999",
                    receiverPostalCode:"1234567890",
                    receiverAddress:"طهران",
                }}
                autoComplete="off"
            >
                <Row className="edit-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name='receiverName'
                            label='نام دریافت‌کننده'
                            required={true}
                        />
                        <FormInput
                            name='receiverMobile'
                            label='موبایل دریافت‌کننده'
                            required={true}
                        />
                        <FormInput
                            name='receiverPostalCode'
                            label='کدپستی'
                            required={true}
                        />
                        {/* <FormProvinceAndCity
                            name='receiverProvinceID'
                            label='استان و شهر'
                            defaultValues={province}
                            onChange={
                                (selectedOptions) => {
                                    setProvince(selectedOptions)
                                }
                            }
                        /> */}
                        <FormTextArea
                            name='receiverAddress'
                            label='آدرس دریافت‌کننده'
                            count={200}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}

export default Edit