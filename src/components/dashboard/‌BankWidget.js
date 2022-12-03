import { addCommaToNumber } from 'tools/utils';
import ACL from 'components/ACL';
import { Col } from 'components/utils/grid';
import { CART_BANK_WIDGET as entity } from "tools/utils/entities"
import { useSelector } from 'react-redux';

function BankWidget({data, widgetCol, ...props }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const userInBank = addCommaToNumber(+data.UsersBooked.UsersCount)
    const productsInBank = addCommaToNumber(+data.UsersBooked.TotalProductsCount)
    const valuesInBank = addCommaToNumber(+data.UsersBooked.TotalProductsPrice / 10)

    return (
        <Col {...widgetCol}>
            <div className='section-card' {...props} >
                <div className=" widget ">
                    <div className='ribbon ribbon-right'><span> بانک </span></div>
                    <div className="icon bank-widget-icon" />
                    <div className="widget-text right">
                        <span>کاربر:</span>
                        <span>تعداد کالا:</span>
                        <span>ارزش کالا:</span>
                    </div>
                    <div className="widget-text left">
                        <span className='bold'>{userInBank} <span className='small'>نفر</span> </span>
                        <span className='bold'>{productsInBank} <span className='small'>عدد</span> </span>
                        <span className='bold'>{valuesInBank} <span className='small'>تومان</span> </span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ACL(BankWidget)
