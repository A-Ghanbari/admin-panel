import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import { addCommaToNumber } from "tools/utils"

function CardItem({ item, loading }) {
    const children = [
        { title: "عنوان: ", value: item.title },
        { title: "حداقل تعداد سفارش کاربر: ", value: `${addCommaToNumber(item.itemCountStart)} عدد` },
        { title: "حداکثر تعداد سفارش کاربر: ", value: `${addCommaToNumber(item.itemCountEnd)} عدد` },
        { title: "درصدی: ", value: item.isPercent ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "وضعیت: ", value: item.statusName },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تاریخ ساخت: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`نوع: ${item.reasonName}`}
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
