import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"

function CardItem({ item, loading }) {
    const children = [
        { title: " تاریخ بستن: ", value: item.startDateTime },
        { title: "تاریخ باز کردن: ", value: item.endDateTime },
        { title: "فعال: ", value: item.isActive ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
        { title: "کاربر: ", value: item.userCreatedName },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`نوع:  ${item.typeName}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Icon key="eye" type="eye" />
                    </div>
                ]}
            >
                <ul>
                    {children.map((child, index) => (
                        <li key={`${item.startDateTime}_${index}`}>
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