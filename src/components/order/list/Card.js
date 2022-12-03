import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import { addCommaToNumber } from "tools/utils"
import PostImage from "components/utils/postImage"

function CardItem({ item, loading }) {
    const children = [
        { title: "مشتری: ", value: item.customerName },
        { title: "مبلغ: ", value: addCommaToNumber(item.totalPaid / 10) },
        { title: "تاریخ: ", value: item.orderDateTime },
        { title: "وضعیت بانکی: ", value: item.orderStatusName },
        {
            title: "وضعیت انبار: ",
            value: {
                0: <span className="unapproved" title="بارگیری‌نشده" />,
                1: <span className="awaiting" title="در انتظار تایید نهایی"/>,
                2: <span className="approved" title="خروج از انبار"/>
            }[item.transStatus]
        },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`شماره سفارش: ${item.ID}`}
                loading={loading}
                cover={<PostImage companyId={item.postCompanyID} />}
                actions={[
                    <div className="actions">
                        <Link
                            to={`./detail/${item.ID}`}
                            title="جزییات"
                            permission="orderDetail"
                        >
                            <Icon key="eye" type="eye" />
                        </Link>
                        <Link
                            to={`./edit/${item.ID}`}
                            title="ویرایش"
                            permission="editOrdersPermission"
                        >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Link
                            to={`./changeStatus/${item.ID}`}
                            title="تغییر وضعیت"
                            permission="editOrderStatus"
                        >
                            <Icon key="changeStatus" type="changeStatus" />
                        </Link>
                        <Link
                            to={`./createManual/${item.ID}`}
                            title="سفارش اپراتوری"
                            permission="createManualOrder"
                        >
                            <Icon key="add" type="add" />
                        </Link>
                    </div>
                ]}
            >
                <ul>
                    {children.map((child) => (
                        <li key={`${item.ID}_${child.value}`}>
                            <span className="bold">{child.title}</span>
                            {child.value}
                        </li>
                    ))}
                </ul>
            </Card>
        </Col>
    )
}

export default CardItem
