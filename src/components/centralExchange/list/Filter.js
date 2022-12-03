import FormSelect from "components/utils/form/items/FormSelect"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import { useSelector } from "react-redux"
import {
    POST_DDL_BRANCH as entity,
    CENTRAL_EXCHANGE_WORKER as workerEntity,
} from "tools/utils/entities"
import { useEffect } from "react"
import { getDDLPostBranches } from "store/actions/post"
import { getCentralExchangeWorkerList } from "store/actions/centralExchange"

export default function Filter({ initialValues, onFinish }) {
    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

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
    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
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
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>
    )
}
