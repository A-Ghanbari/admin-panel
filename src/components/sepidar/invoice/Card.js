import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import { addCommaToNumber } from "tools/utils"

function CardItem({ item, loading }) {
    const children = [
        { title: "مبلغ: ", value: `${addCommaToNumber(Math.floor(item.Price / 10))} تومان` },
        { title: "مبلغ خالص: ", value: `${addCommaToNumber(Math.floor(item.NetPrice / 10))} تومان` },
        { title: "تخفیف: ", value: `${addCommaToNumber(Math.floor(item.Discount / 10))} تومان` },
        { title: "مالیات: ", value: `${addCommaToNumber(Math.floor(item.Tax / 10))} تومان` },
        { title: "عوارض: ", value: `${addCommaToNumber(Math.floor(item.Duty / 10))} تومان` },
        { title: "تاریخ: ", value: item.ShamsiDate },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.InvoiceID}
                title={`شماره فاکتور: ${item.InvoiceID}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Icon key="eye" type="eye" />
                    </div>
                ]}
            >
                <ul>
                    {children.map((child) => (
                        <li key={`${item.InvoiceID}_${child.value}`}>
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
