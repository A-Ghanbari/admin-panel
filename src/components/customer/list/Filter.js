import { useState } from "react"
import { exportTableExcelFile } from 'store/actions/export'
import API_SERVICES from "tools/shared/apis"
import FormInput from "components/utils/form/items/FormInput"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish }) {
    const [loading, setLoading] = useState(false)
    const [fields, setFields] = useState(initialValues)

    const onValuesChange = (changedValues, allValues) => {
        setFields(allValues)
    }

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues} onValuesChange={onValuesChange}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="userName"
                            label="نام کاربری"
                        />
                        <FormInput
                            name="firstName"
                            label="نام"
                        />
                        <FormInput
                            name="lastName"
                            label="نام خانوادگی"
                        />
                        <FormInput
                            name="nationalCode"
                            label="کد ملی"
                        />
                        <FormInput
                            name="cell"
                            label="شماره همراه"
                        />
                        <FormInput
                            name="reagentCode"
                            label="شماره همراکد معرف"
                        />
                    </ColumnGrid>
                    <ActionButton position="center">
                        <Button name="submit" label="جستجو" htmlType="submit" />
                        <Button
                            name="excel"
                            label="خروجی اکسل"
                            type="primary-dark"
                            loading={loading}
                            onClick={() => exportTableExcelFile({
                                url: API_SERVICES.customer.exportExcel,
                                fileName: 'customer-export',
                                data: fields,
                                loading: setLoading
                            })}
                        />
                    </ActionButton>
                </Row>
            </Form>
        </Collapse>
    )
}
