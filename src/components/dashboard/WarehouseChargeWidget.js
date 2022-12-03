import { addCommaToNumber } from 'tools/utils';
import ACL from 'components/ACL';
import { Col } from 'components/utils/grid';
import { WAREHOUSE_WIDGET as entity } from "tools/utils/entities"
import { useSelector } from 'react-redux';

function WarehouseValueWidget({data, widgetCol, ...props }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    let productName = (data.productLastCharged.productName !== null) ? data.productLastCharged.productName : ""
    productName = (productName.length <= 30)
        ? productName
        : `${productName.substr(0, 20)} ...`
    const chargeCount = addCommaToNumber(+data.productLastCharged.chargeCount)
    const lastCount = addCommaToNumber(+data.productLastCharged.lastCount)

    return (
        <Col {...widgetCol}>
            <div className='section-card' {...props} >
                <div className=" widget ">
                    <div className='ribbon ribbon-right'><span> شارژ کالا </span></div>
                    <div className="icon warehouse-charge-icon" />
                    <div className="widget-text right">
                        <span>کالا:</span>
                        <span>موجودی جاری:</span>
                        <span>موجودی گذشته:</span>
                    </div>
                    <div className="widget-text left">
                        <span className='bold'>{productName}</span>
                        <span className='bold'>{chargeCount} <span className='small'>عدد</span> </span>
                        <div className='bold ltr'>   <span className='last-charge'> {lastCount} </span> <span className='small charge-absulote'> عدد</span> </div>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ACL(WarehouseValueWidget)
