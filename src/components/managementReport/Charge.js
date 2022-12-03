import { useSelector } from 'react-redux'
import { Bar, CartesianGrid, LabelList } from 'recharts'
import { MANAGEMENT_REPORT_CHARGE as entity } from "tools/utils/entities"
import { convertDates } from "tools/utils"
import { getManagementReportCharge } from 'store/actions/managementReport'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import { Col, Row } from 'components/utils/grid'
import BarChart from 'components/utils/chart/BarChart'
import CustomizedAxisTick from 'components/utils/chart/CustomizedAxisTick'
import FormDatePicker from 'components/utils/form/items/FormDatePicker'
import "components/managementReport/managementReport.scss"

function Charge() {
    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    const onFinish = (values) => {
        getManagementReportCharge(convertDates(values))
    }

    const startDay = data[0]?.date
    const endDay = data[data.length - 1]?.date

    return (
        <div>
            <div className='section-card management-card'>
                <Form
                    name="ChargeForm"
                    onFinish={onFinish}
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
                    <Button
                        label='جستجو'
                        loading={loading}
                        htmlType='submit' />
                </Form>
            </div>
            {data.length ?
                <>
                    <Row gutter={[16, 0]}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12} >
                            <div className='section-card management-card'>
                                <h1>مقایسه ی  شارژ مثبت و منفی برای کلیه ی کالا ها از تاریخ <span>{startDay}</span>  تا  <span>{endDay}</span> </h1>
                                <div className='scroll-x ltr'>
                                    <BarChart
                                        data={data}
                                        XAxisKey="date"
                                        tick={<CustomizedAxisTick />}
                                        margin={{
                                            top: 20,
                                            right: 20,
                                            bottom: 0,
                                            left: 20,
                                        }}
                                    >
                                        <CartesianGrid stroke="#dbd3d0" />
                                        <Bar type="monotone" dataKey="sumIncreaseCharge" fill="#F98495" unit=" عدد " name="شارژ مثبت " barSize={10} radius={[3, 3, 0, 0]}>
                                            <LabelList dataKey="sumIncreaseCharge" position="top" fill="#F98495" />
                                        </Bar>
                                        <Bar type="monotone" dataKey="sumDecreaseCharge" fill="#FAB197" unit=" عدد " name="شارژ منفی " barSize={10} radius={[3, 3, 0, 0]} >
                                            <LabelList dataKey="sumDecreaseCharge" position="top" fill="#FAB197" />
                                        </Bar>
                                    </BarChart>
                                </div>
                            </div >
                        </Col >
                    </Row >
                </>
                :
                null
            }
        </div >
    )
}

export default Charge