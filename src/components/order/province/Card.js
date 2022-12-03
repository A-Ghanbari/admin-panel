import Card from "components/utils/card"
import { Col } from "components/utils/grid"

function CardItem({ item, loading }) {
    const children = [
        { title: 'پست: ', value: item.postCompany },
        { title: 'تاریخ: ', value: item.date },
        { title: 'تعداد: ', value: item.unsendedcount },
    ]

    {/* @Hossein_Moazami talk to Shayan for add ID in this service */ }

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`استان: ${item.provicne}`}
                loading={loading}
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
