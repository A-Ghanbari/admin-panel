import Card from "components/utils/card"
import { Col } from "components/utils/grid"

function CardItem({ item, loading }) {
    const children = [
        { title: "تاریخ: ", value: item.date },
        { title: "شرکت پستی: ", value: item.postCompany },
        { title: "تعداد سفارش های بارگیری نشده: ", value: item.unsendedcount },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={` استان: ${item.provicne}`}
                loading={loading}
            >
                <ul>
                    {children.map((child) => (
                        <li key={`${item.provicne}`}>
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
