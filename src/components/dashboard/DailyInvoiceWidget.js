import { addCommaToNumber, resolveDate, resolveMonthName } from 'tools/utils';
import ACL from 'components/ACL';
import TinyBarChart from 'components/utils/chart/TinyBarChart';
import { getLastMonthTodayInvoice } from 'tools/utils/sales';
import { Bar } from 'recharts';
import { Col } from 'components/utils/grid';
import { SALES_WIDGET as entity } from "tools/utils/entities"
import { useSelector } from 'react-redux';

function DailySalesWidget({ data,widgetCol, ...props }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const today = resolveDate(data.today).day
    const monthName = resolveMonthName(resolveDate(data.today).month)
    const currentMonthTodayInvoice = data.salesInfo.dailyInvoices
    const lastMonthTodayInvoice = getLastMonthTodayInvoice(data.salesCharts, today)
    const percent = ((currentMonthTodayInvoice - lastMonthTodayInvoice) / Math.abs(lastMonthTodayInvoice) * 100).toFixed(2)

    const barData = [{
        current: currentMonthTodayInvoice,
        last: lastMonthTodayInvoice
    }]

    return (
        <Col {...widgetCol}>
            <div className='section-card'>
                <div className='widget'>
                    <div className='ribbon ribbon-right'><span> {today} {monthName} </span></div>
                    <div className="widget-chart center dashboard-chart">
                        <TinyBarChart
                            width={80}
                            height={60}
                            data={barData}
                            margin={{
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            }}
                        >
                            <Bar dataKey="current" barSize={10} className="current-bar" radius={[3, 3, 0, 0]} />
                            <Bar dataKey="last" barSize={10} className="last-bar" radius={[3, 3, 0, 0]} />
                        </TinyBarChart>
                        <span className='percent'>
                            <span className={percent > 0 ? "positive" : percent < 0 ? "negative" : " "} />
                            {percent}%
                        </span>
                    </div>
                    <div className="widget-text right">
                        <span className='current'>فاکتور جاری:</span>
                        <span className='last'>فاکتور گذشته:</span>
                    </div>
                    <div className="widget-text left">
                        <span className='bold'>{addCommaToNumber(currentMonthTodayInvoice)} <span className='small'>عدد</span> </span>
                        <span className='bold'>{addCommaToNumber(lastMonthTodayInvoice)} <span className='small'>عدد</span> </span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ACL(DailySalesWidget)
