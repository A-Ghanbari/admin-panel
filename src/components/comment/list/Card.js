import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Rate from "components/utils/rate"

function CardItem({ item, loading }) {
    const children = [
        { title: "عنوان:", value: item.title },
        { title: " امتیاز:", value: <Rate value={item.score} /> },
        { title: "کالا:", value: item.productName },
        { title: "برند:", value: item.brandName },
        { title: "تاریخ ارسال:", value: item.createdDateTime },
        { title: "کاربر:", value: item.customerName },
        { title: "ایمیل:", value: item.email },
        {
            title: "وضعیت:", value: {
                0: <span className="awaiting" title="در انتظار تایید " />,
                1: <span className="unapproved" title="تایید نشده" />,
                2: <span className="approved" title="تایید شده" />
            }[item.status]
        },
        { title: "منتشر کننده:", value: item.userPublished },
        { title: "تاریخ انتشار:", value: item.publishDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`کد کالا: ${item.productID}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./detail/${item.ID}`}>
                            <Icon key="eye" type="eye" />
                        </Link>
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