import { useEffect, useState } from "react"
import {
    POST_DDL_BRANCH as entity,
} from "tools/utils/entities"
import { getDDLPostBranches } from "store/actions/post"
import { useSelector } from 'react-redux'
import Form from 'components/utils/form'
import { Col, ColumnGrid, Row } from 'components/utils/grid'
import { FormInput } from 'components/utils/form/items/FormInput'
import { FormSelect } from 'components/utils/form/items/FormSelect'
import { FormTextArea } from 'components/utils/form/items/FormTextArea'
import ActionButton from "components/utils/actionsButton"
import Button from 'components/utils/field/button'


const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }

export default function Info({ setValues, barcodeSection }) {
    const [disableConfirmButton, setDisableConfirmButton] = useState(false)
    const postBranchesList = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getDDLPostBranches({ WarehouseType: 0 })
    }, [])

    const onFinish = (values) => {
        setValues(values)
        barcodeSection(true)
        setDisableConfirmButton(true)
    }

    return (
        <div className="centralExchange-exit-info">
            <h1>ثبت اطلاعات پستی</h1>
            <Form
                name="centralExchange_exit_info"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Row >
                    <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12} className="centralExchange-exit-col">
                        <ColumnGrid col={fieldCol}>
                            <FormSelect
                                name="postCompanyID"
                                label="شرکت پستی"
                                required={true}
                                items={[...postBranchesList]}
                            />
                            <FormInput
                                name='postReceiverName'
                                label='تحویل گیرنده'
                                required={true}
                            />
                        </ColumnGrid>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12} >
                        <FormTextArea
                            name='description'
                            label='توضیحات'
                            count={80}
                        />
                    </Col>
                </Row>
                <ActionButton position="center">
                    <Button
                        type="primary-dark"
                        name='submit'
                        label='ثبت'
                        htmlType='submit'
                        disabled={disableConfirmButton}
                    />
                </ActionButton>
            </Form>
        </div >
    )
}