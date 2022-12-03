import { addCommaToNumber } from 'tools/utils';
import ACL from 'components/ACL';
import { Col } from 'components/utils/grid';
import { CART_BANK_WIDGET as entity } from "tools/utils/entities"
import { useSelector } from 'react-redux';

function CartWidget({data, widgetCol, ...props }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const userInCart = addCommaToNumber(+data.UsersNotBooked.UsersCount)
    const productsInCart = addCommaToNumber(+data.UsersNotBooked.TotalProductsCount)
    const valuesInCart = addCommaToNumber(+data.UsersNotBooked.TotalProductsPrice / 10)

    return (
        <Col {...widgetCol}>
            <div className='section-card' {...props} >
                <div className=" widget ">
                    <div className='ribbon ribbon-right'><span> سبد خرید</span></div>
                    <div className="icon cart-widget-icon" />
                    <div className="widget-text right">
                        <span>کاربر:</span>
                        <span>تعداد کالا:</span>
                        <span>ارزش کالا:</span>
                    </div>
                    <div className="widget-text left">
                        <span className='bold'>{userInCart} <span className='small'>نفر</span> </span>
                        <span className='bold'>{productsInCart} <span className='small'>عدد</span> </span>
                        <span className='bold'>{valuesInCart} <span className='small'>تومان</span> </span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ACL(CartWidget)
