import { addCommaToNumber } from 'tools/utils';
import ACL from 'components/ACL';
import { Col } from 'components/utils/grid';
import { SALES_WIDGET as entity } from "tools/utils/entities"
import { useSelector } from 'react-redux';

function ActiveUsersWidget({data, widgetCol, ...props }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const activeUser = addCommaToNumber(data.userInfo.totalActiveUsers)
    const userWithShopping = addCommaToNumber(data.userInfo.periodIDCustomers)

    return (
        <Col {...widgetCol}>
            <div className='section-card'>
                <div className=" widget ">
                    <div className='ribbon ribbon-right'><span>کاربران</span></div>
                    <div className="icon users-icon" />
                    <div className="widget-text right">
                        <span>فعال:</span>
                        <span>دارای خرید:</span>
                    </div>
                    <div className="widget-text left">
                        <span className='bold'>{activeUser} <span className='small'>نفر</span></span>
                        <span className='bold'>{userWithShopping} <span className='small'>نفر</span></span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ACL(ActiveUsersWidget)
