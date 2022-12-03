import { addCommaToNumber } from 'tools/utils';
import ACL from 'components/ACL';
import { Col } from 'components/utils/grid';
import { WAREHOUSE_WIDGET as entity } from "tools/utils/entities"
import { useSelector } from 'react-redux';

function WarehouseValueWidget({data, widgetCol, ...props }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const productsCount = addCommaToNumber(+data.productsAvaiablePrice.totalProductCount)
    const productsValue = addCommaToNumber(+data.productsAvaiablePrice.totalProductPrice)

    return (
        <Col {...widgetCol}>
            <div className='section-card' {...props} >
                <div className=" widget ">
                    <div className='ribbon ribbon-right'><span> انبار </span></div>
                    <div className="icon warehouse-value-icon" />
                    <div className="widget-text right">
                        <span>دارایی انبار:</span>
                        <span>ارزش کل انبار:</span>
                    </div>
                    <div className="widget-text left">
                        <span className='bold'>{productsCount} <span className='small'>عدد</span> </span>
                        <span className='bold'>{productsValue} <span className='small'>تومان</span> </span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ACL(WarehouseValueWidget)
