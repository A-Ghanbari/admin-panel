import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"

function CardItem({ item, loading }) {
    const children = [
        { title: "فعال:", value: item.isActive ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "کاربر:", value: item.userCreated },
        { title: "تاریخ:", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`عنوان: ${item.title}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Icon key="eye" type="eye" />
                    </div>
                ]}
            >
                <ul>
                    {children.map((child, index) => (
                        <li key={`${item.ID}_${index}`}>
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