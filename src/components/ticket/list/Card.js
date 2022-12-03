import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"

function CardItem({ item, loading }) {
    const children = [
        { title: "نوع: ", value: item.ticketTypeName },
        { title: "نام: ", value: item.customerFirstName + " " + item.customerLastName },
        { title: "نام کاربری: ", value: item.userName },
        { title: "ورودی کاربر: ", value: item.value },
        { title: "وضعیت: ", value: convertStatus(item.status) },
        { title: "تاریخ ایجاد: ", value: item.ticketCreatedDateTime },
        { title: "تاریخ آخرین پیام: ", value: item.lastResponseDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ticketID}
                title={`کد: ${item.ticketID}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./conversation/${item.ticketID}`} title="مشاهده تیکت">
                            <Icon key="message" type="message" />
                        </Link>
                    </div>
                ]}
            >
                <ul>
                    {children.map((child, index) => (
                        <li key={`${item.ticketID}_${index}`}>
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

function convertStatus(num) {
    const status = {
        0: <span className="fail">در انتظار پاسخ</span>,
        1: <span className="warning">در حال بررسی</span>,
        2: <span className="success">پاسخ داده شده</span>,
        3: <span className="accent">بسته شده</span>,
        4: <span className="warning">در حال بررسی بخش مالی</span>,
        5: <span className="warning">در حال بررسی بخش انبار مرکزی</span>,
        6: <span className="warning">در حال بررسی بخش انبار لجستیک</span>,
        7: <span className="warning">در حال بررسی تولید </span>,
    }[num]

    return status
}