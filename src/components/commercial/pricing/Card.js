import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import { addCommaToNumber } from "tools/utils"

function CardItem({ item, loading }) {
    const children = [
        { title: "نام کالا: ", value: item.productName },
        { title: "شماره حواله: ", value: item.commerceID },
        { title: "قیمت قبلی: ", value: addCommaToNumber(item.priceOld / 10) },
        { title: "قیمت فعلی: ", value: addCommaToNumber(item.priceNew / 10) },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تاریخ ساخت: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`کد کالا: ${item.productID}`}
                cover={<img src={item.productPicLink} width="40" height="40" />}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Icon key="eye" type="eye" />
                        <Icon key="edit" type="edit" />
                        <Icon key="delete" type="delete" />
                    </div>
                ]}
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
