import ACL from 'components/ACL'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import { FormInputNumber } from 'components/utils/form/items/FormInputNumber'
import { FormSelect } from 'components/utils/form/items/FormSelect'
import FormTextArea from 'components/utils/form/items/FormTextArea'
import { ColumnGrid, Row } from 'components/utils/grid'
import { useState } from 'react'
import { chargeCustomerWallet } from 'store/actions/customer'
import { customerWalletTransactionTypes } from 'tools/shared/constants'
import { checkFilters } from 'tools/utils'

function ChargeWallet({ ID }) {
    const [loading, setLoading] = useState(false)
    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

    const onFinish = (values) => {
        setLoading(true)
        const serviceField = {
            CustomerID: ID,
            ...checkFilters({ ...values })
        }
        chargeCustomerWallet(serviceField)
        setLoading(false)
    }

    return (
        <Form
            name="ChargeWalletForm"
            onFinish={onFinish}
            autoComplete="off"
        >
            <Row className="edit-form">
                <ColumnGrid col={fieldCol}>
                    <FormInputNumber
                        name='changeBalance'
                        label='مبلغ شارژ (ریال)'
                        required={true}
                    />
                    <FormTextArea
                        name='description'
                        label='توضیحات'
                        required={true}
                    />
                    <FormSelect
                        name="transactionType"
                        label="نوع انتقال"
                        required={true}
                        items={[...customerWalletTransactionTypes]}
                    />
                </ColumnGrid>
                <ActionButton position="center">
                    <Button
                        type="primary-dark"
                        name='submit'
                        label='شارژ'
                        loading={loading}
                        htmlType='submit'
                    />
                </ActionButton>
            </Row>
        </Form>
    )
}

export default ACL(ChargeWallet)