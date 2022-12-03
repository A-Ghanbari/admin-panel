import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getDDLPostBranches } from "store/actions/post"
import { getCentralExchangeWorkerList } from "store/actions/centralExchange"
import { exportTableExcelFile } from "store/actions/export"
import API_SERVICES from "tools/shared/apis"
import {
    POST_DDL_BRANCH as entity,
    CENTRAL_EXCHANGE_WORKER as workerEntity,
} from "tools/utils/entities"
import FormSelect from "components/utils/form/items/FormSelect"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import { FormInput } from "components/utils/form/items/FormInput"
import ActionButton from "components/utils/actionsButton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish }) {
    const [loading, setLoading] = useState(false)
    const [fields, setFields] = useState(initialValues)

    const postBranchesList = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const workerList = useSelector(
        (s) => s[workerEntity.pluralizeName]
    )

    useEffect(() => {
        getDDLPostBranches({ WarehouseType: 0 })
        getCentralExchangeWorkerList({})
    }, [])

    const onValuesChange = (changedValues, allValues) => {
        setFields(allValues)
    }
    
    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues} onValuesChange={onValuesChange}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="palletID"
                            label="کد پالت"
                        />
                        <FormInput
                            name="orderID"
                            label="کد سفارش"
                        />
                        <FormSelect
                            name="postCompanyID"
                            label="شرکت پستی"
                            items={[{
                                text: 'همه',
                                value: ' '
                            }, ...postBranchesList]}
                        />
                        <FormSelect
                            name="userCreatorID"
                            label="کارمند انبار"
                            items={[{
                                text: 'همه',
                                value: ' '
                            }, ...workerList]}
                        />
                    </ColumnGrid>
                    <ActionButton position="center">
                        <Button name="submit" label="جستجو" htmlType="submit" />
                        <Button
                            name="excel"
                            label="خروجی اکسل"
                            type="primary-dark"
                            permission="excelExportPaletteBox"
                            loading={loading}
                            onClick={() => exportTableExcelFile({
                                url: API_SERVICES.centralExchange.exchangeBox.exportExcel,
                                fileName: 'central-exchange-box-export',
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
