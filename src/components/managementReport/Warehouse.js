import { useSelector } from "react-redux"
import { Area, CartesianGrid, Line } from "recharts"
import { convertDates } from "tools/utils"
import { MANAGEMENT_REPORT_WAREHOUSE as entity } from "tools/utils/entities"
import { getManagementReportWarehouse } from "store/actions/managementReport"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import { Col, Row } from "components/utils/grid"
import ComposedChart from "components/utils/chart/ComposedChart"
import CustomizedAxisTick from "components/utils/chart/CustomizedAxisTick"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import "components/managementReport/managementReport.scss"
import { warehouse } from "tools/shared/managementReport"

function Warehouse() {
    // const { data, loading } = useSelector((s) => s[entity.name])

    const onFinish = (values) => {
        getManagementReportWarehouse(convertDates(values))
    }

    const startDay = warehouse[0]?.date
    const endDay = warehouse[warehouse.length - 1]?.date

    return (
        <div>
            <div className="section-card management-card">
                <Form
                    name="WarehouseForm"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Row>
                        <Col lg={12} xl={8} xxl={6}>
                            <FormDatePicker
                                name="createdDateFrom"
                                label="تاریخ از"
                                required={true}
                            />
                        </Col>
                        <Col lg={12} xl={8} xxl={6}>
                            <FormDatePicker
                                name="createdDateTo"
                                label="تاریخ تا"
                                required={true}
                            />
                        </Col>
                    </Row>
                    <Button label="جستجو" htmlType="submit" />
                </Form>
            </div>
            <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
                    <div className="section-card management-card">
                        <h1>
                            تعداد کالا های خارج شده از انبار از تاریخ{" "}
                            <span>{startDay}</span> تا <span>{endDay}</span>{" "}
                        </h1>
                        <div className="scroll-x ltr">
                            <ComposedChart
                                data={warehouse}
                                XAxisKey="date"
                                tick={<CustomizedAxisTick />}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#dbd3d0" />
                                <Area
                                    type="monotone"
                                    dataKey="productCountOutWarehouse"
                                    fill="#8884d8"
                                    stroke="#8884d8"
                                    unit=" عدد "
                                    name="خارج شده"
                                />
                            </ComposedChart>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
                    <div className="section-card management-card">
                        <h1>
                            تعداد کالا های باقی مانده در انبار از تاریخ{" "}
                            <span>{startDay}</span> تا <span>{endDay}</span>{" "}
                        </h1>
                        <div className="scroll-x ltr">
                            <ComposedChart
                                data={warehouse}
                                XAxisKey="date"
                                tick={<CustomizedAxisTick />}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#dbd3d0" />
                                <Line
                                    type="monotone"
                                    dataKey="productCountInWarehouse"
                                    stroke="#ff7300"
                                    unit=" عدد "
                                    name="باقی مانده"
                                />
                            </ComposedChart>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Warehouse
