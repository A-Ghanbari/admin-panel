import ACL from 'components/ACL';
import { Col } from 'components/utils/grid';
import { SALES_WIDGET as entity } from "tools/utils/entities"
import { useSelector } from 'react-redux';

function LastOrderWidget({data, widgetCol, ...props }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const lastOrder = data.lastOrderInfo.orderID
    const lastUserOrder = data.lastOrderInfo.customerName
    const lastUserOrderTime = data.lastOrderInfo.time.split(' ')[1]

    return (
        <Col {...widgetCol}>
            <div className='section-card'>
                <div className=" widget" >
                    <div className='ribbon ribbon-right'><span>سفارش</span></div>
                    <div className="icon last-order-icon" />
                    <div className="widget-text right">
                        <span>شماره:</span>
                        <span>کاربر:</span>
                        <span>زمان:</span>
                    </div>
                    <div className="widget-text left">
                        <span className='bold'>{lastOrder}</span>
                        <span className='bold'>{lastUserOrder}</span>
                        <span className='bold'>{lastUserOrderTime}</span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ACL(LastOrderWidget)
