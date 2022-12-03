import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import { addCommaToNumber } from "tools/utils"

function CardItem({ item, loading }) {
    const children = [
        { title: "تعداد کاربر: ", value: `${addCommaToNumber(item.customersUsed)} نفر` },
        { title: "تعداد سفارش: ", value: `${addCommaToNumber(item.ordersUsed)} عدد` },
        { title: "رزرو در بانک: ", value: item.bankReserved },
        { title: "تاریخ شروع: ", value: item.startDateTime },
        { title: "تاریخ پایان: ", value: item.endDateTime },
        { title: "وضعیت: ", value: item.status === 1 ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "توضیحات: ", value: item.description },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`عنوان: ${item.title}`}
                cover={<img src={item.backgrounImage} width="40" height="40" />}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Icon key="add" type="add" />
                        <Icon key="edit" type="edit" />
                        <Icon key="delete" type="delete" />
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
