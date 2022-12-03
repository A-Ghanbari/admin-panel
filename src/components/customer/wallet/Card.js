import Card from "components/utils/card"
import { Col } from "components/utils/grid"
import { addCommaToNumber } from "tools/utils"

function CardItem({ item, loading }) {
    const changeBalanceColor = (item.changeBalance > 0) ? 'green' : 'red'
    const currentBalanceColor = (item.currentBalance > 0) ? 'green' : 'red'
    const children = [
        { title: "نام کاربری: ", value: item.userName },
        { title: "نام: ", value: item.customerFullName },
        { title: "نوع انتقال: ", value: item.transactionTypeName },
        { title: "مقدار انتقال: ", value: (<span style={{ color: changeBalanceColor }}>{`${addCommaToNumber(item.changeBalance / 10)} تومان`}</span>) },
        { title: "موجودی فعلی: ", value: (<span style={{ color: currentBalanceColor }}>{`${addCommaToNumber(item.currentBalance / 10)} تومان`}</span>) },
        { title: "انتقال دهنده: ", value: item.adminCharger },
        { title: "توضیحات: ", value: item.description },
        { title: "وضعیت: ", value: item.status },
        { title: "تاریخ انتقال: ", value: item.transactionDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.userName}
                title={` کاربر: ${item.customerFullName}`}
                loading={loading}
                actions={[]}
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
