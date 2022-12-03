import { resolveDate, resolveMonthName, addCommaToNumber } from 'tools/utils';
import ACL from 'components/ACL';
import { Bar } from 'recharts';
import TinyBarChart from 'components/utils/chart/TinyBarChart';
import { Col } from 'components/utils/grid';
import { SALES_WIDGET as entity } from "tools/utils/entities"
import { useSelector } from 'react-redux';

function MonthlySalesWidget({data, widgetCol, ...props }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const monthName = resolveMonthName(resolveDate(data.today).month)

    const currentMonthTotalSales = +data.salesInfo.monthlySales / 10
    const lastMonthTotalSales = +data.salesCharts.lastMonthTotalPrice
    const percent = ((currentMonthTotalSales - lastMonthTotalSales) / Math.abs(lastMonthTotalSales) * 100).toFixed(2)
    const barData = [{
        current: currentMonthTotalSales,
        last: lastMonthTotalSales
    }]

    return (
        <Col {...widgetCol}>
            <div className='section-card'>
                <div className='widget'>
                    <div className='ribbon ribbon-right'><span> {monthName} </span></div>
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
                        <span className='current'>کل فروش جاری:</span>
                        <span className='last'>کل فروش گذشته:</span>
                    </div>
                    <div className="widget-text left">
                        <span className='bold'>{addCommaToNumber(currentMonthTotalSales)} <span className='small'>تومان</span> </span>
                        <span className='bold'>{addCommaToNumber(lastMonthTotalSales)} <span className='small'>تومان</span> </span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ACL(MonthlySalesWidget)
