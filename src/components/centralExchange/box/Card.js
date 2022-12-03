import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"

function CardItem({ item, loading }) {
    const children = [
        { title: "کد پالت: ", value: item.palletID },
        { title: "شعبه: ", value: item.branch },
        { title: "سازنده پالت: ", value: item.palletCreatorName },
        { title: "سازنده جعبه: ", value: item.boxCreatorName },
        { title: "دریافت کننده: ", value: item.receiverName },
        { title: "شماره برجسب: ", value: item.labelNumber },
        {
            title: "سفارش دستی: ",
            value: {
                true: <span className="approved" />,
                false: <span className="unapproved" />,
            }[item.isManual]
        },
        { title: "تاریخ دریافت پستچی: ", value: item.postmanReceiveDate }
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.orderID}
                title={`شماره سفارش: ${item.orderID}`}
                loading={loading}
                cover={<img src={item.postPhoto} alt="پست" width="32px" height="32px" />}
                actions={[
                    <div className="actions">
                        {!(item.isManual) &&
                            <Link to={`./detail/${item.orderID}`} title="جزییات">
                                <Icon key="eye" type="eye" />
                            </Link>
                        }
                    </div>
                ]}
            >
                <ul>
                    {children.map((child) => (
                        <li key={`${item.orderID}_${child.value}`}>
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
