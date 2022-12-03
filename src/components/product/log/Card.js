import Card from "components/utils/card"
import { Col } from "components/utils/grid"

function CardItem({ item, loading }) {
    const children = [
        { title: "کد محصول: ", value: item.productID },
        { title: "کد سفارش: ", value: item.orderID },
        { title: "کاربر: ", value: item.username },
        { title: "نام: ", value: item.productName },
        { title: "برند", value: item.brandName },
        { title: "تغییر: ", value: item.changeCount > 0 ? <span className="success">{item.changeCount}</span> : <span className="fail ltr">{item.changeCount}</span> },
        { title: "موجودی فعلی: ", value: item.currentCount },
        { title: "علت: ", value: item.warehouseType },
        { title: "توضیحات: ", value: item.description },
        { title: "تاریخ تغییر: ", value: item.dateString },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`حواله: ${item.commerceID}`}
                loading={loading}
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