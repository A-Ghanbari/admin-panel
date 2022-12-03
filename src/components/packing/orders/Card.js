import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"

function CardItem({ item, loading }) {
    const children = [
        { title: "کاربر ایجاد کننده: ", value: item.adminUserName },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
        { title: "کاربر ویرایش کننده: ", value: item.userComplated },
        { title: "تاریخ ویرایش: ", value: item.lastUpdateDateTime },
        { title: "میانگین زمانی: ", value: item.averageComplateTime },
        {
            title: "خروج خورده: ",
            value: {
                true: <span className="approved" title="خروج خورده" />,
                false: <span className="unapproved" title="مانده در انبار" />
            }[item.isComplated]
        },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.orderID}
                title={`شماره سفارش: ${item.orderID}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./detail/${item.ID}`} title="جزییات">
                            <Icon key="eye" type="eye" />
                        </Link>
                    </div>
                ]}
            >
                <ul>
                    {children.map((child) => (
                        <li key={item.ID}>
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
