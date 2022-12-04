import { useState } from 'react'
import { useSelector } from 'react-redux'
import { convertDates } from "tools/utils"
import { PACKING_RANKING as entity } from "tools/utils/entities"
import PackerCard from 'components/packing/ranking/PackerCard'
import Report from 'components/packing/ranking/Report'
import { getPackingRankingList } from 'store/actions/packing'
import { Col, Row } from 'components/utils/grid'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormDatePicker from 'components/utils/form/items/FormDatePicker'
import ActionButton from 'components/utils/actionsButton'
import { exportTableExcelFile } from 'store/actions/export'
import API_SERVICES from 'tools/shared/apis'
import "components/packing/ranking/ranking.scss"
import Card from 'components/utils/card'

export default function Ranking() {
    // const [date, setData] = useState(null)
    // const [loading, setLoading] = useState(false)

    // const { dataList, loading: dataLoading } = useSelector(
    //     (s) => s[entity.pluralizeName]
    // )

    // const onFinish = (values) => {
    //     getPackingRankingList(convertDates(values))
    // }

    // const onValuesChange = (changedValues, allValues) => {
    //     if (allValues.createdDateFrom !== undefined && allValues.createdDateTo !== undefined) {
    //         setData(convertDates(allValues))
    //     }
    // }
    return (
        <div className='ranking'>
            <div className='section-card management-card'>
                <Form
                    name="WarehouseForm"
                    // onFinish={onFinish}
                    // onValuesChange={onValuesChange}
                    autoComplete="off"
                >
                    <Row>
                        <Col lg={12} xl={8} xxl={6}>
                            <FormDatePicker
                                name='createdDateFrom'
                                label='تاریخ از'
                                required={true}
                            />
                        </Col>
                        <Col lg={12} xl={8} xxl={6}>
                            <FormDatePicker
                                name='createdDateTo'
                                label='تاریخ تا'
                                required={true}
                            />
                        </Col>
                    </Row>
                    <ActionButton position="center">
                        <Button name="submit" label="جستجو" htmlType="submit" />
                        <Button
                            name="excel"
                            label="خروجی اکسل"
                            type="primary-dark"
                            // loading={loading}
                            // onClick={() => exportTableExcelFile({
                            //     url: API_SERVICES.packing.ranking.excel,
                            //     fileName: 'packing-rank-export',
                            //     data: date,
                            //     loading: setLoading
                            // })}
                        />
                    </ActionButton>
                </Form>
            </div>
                <Card title="گزارش وضعیت">
                    <Report permission="barcodeReportOperationPermission" />
                    <PackerCard />
                </Card>
        </div>
    )
}