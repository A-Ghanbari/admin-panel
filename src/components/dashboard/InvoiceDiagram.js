import ACL from 'components/ACL';
import { getMonthlyComparisonInvoices } from 'tools/utils/sales';
import { Bar, Brush } from 'recharts';
import BarChart from "components/utils/chart/BarChart";
import { resolveDate } from "tools/utils";
import { Col } from "components/utils/grid";
import { SALES_WIDGET as entity } from "tools/utils/entities"
import { useSelector } from 'react-redux';
import useWindowSize from 'hooks/useWindowSize';

function SalesDiagram({ data,...props }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const { width } = useWindowSize()

    const today = resolveDate(data.today).day - 1
    const startDay = today - (today % 7)
    const endDay = (today + 6 <= data.salesCharts.currentMonth.length) ? (today + 6) - (today % 7) : data.salesCharts.currentMonth.length - 1
    const monthlyComparisonData = getMonthlyComparisonInvoices(data.salesCharts)

    return (
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
            <div className="section-card">
                <div className='ribbon ribbon-top-right'><span> فاکتور </span></div>
                <div className='scroll-x ltr dashboard-chart'>
                    <BarChart
                        height={200}
                        data={monthlyComparisonData}
                        XAxisKey='day'
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {width > 767 && <Brush dataKey="name" height={15} startIndex={startDay} endIndex={endDay} />}
                        <Bar dataKey="current" barSize={15} className="current-bar" unit=" عدد " name="ماه جاری" radius={[5, 5, 0, 0]} />
                        <Bar dataKey="last" barSize={15} className="last-bar" unit=" عدد " name="ماه گذشته" radius={[5, 5, 0, 0]} />
                    </BarChart>
                </div>
            </div>
        </Col>
    );
}

export default ACL(SalesDiagram)