import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"

function CardItem({ item, loading }) {
    const children = [
        { title: "HPH: ", value: item.HPH },
        { title: "کد سفارش اپراتوری: ", value: item.manualOrderID },
        { title: "وضعیت سفارش: ", value: item.manualOrderStatusName },
        { title: "نوع سفارش: ", value: item.manualOrderType },
        { title: "سازنده سفارش: ", value: item.manualOrderUserCreated },
        { title: "کاربر تایید کننده: ", value: item.userAccepted },
        { title: "تاریخ ساخت': ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.originalOrderID}
                title={`کد سفارش اصلی: ${item.originalOrderID}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./detail/${item.ID}`} state={{ manualOrderID: item.manualOrderID }} title="جزییات">
                            <Icon key="eye" type="eye" />
                        </Link>
                    </div>
                ]}
            >
                <ul>
                    {children.map((child) => (
                        <li key={`${item.originalOrderID}_${child.value}`}>
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
