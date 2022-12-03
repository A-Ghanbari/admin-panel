import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"

function CardItem({ item, loading }) {
    const children = [
        { title: "کد: ", value: item.ID },
        { title: "نوع: ", value: item.supplierType === 1 ? "حقیقی" : "حقوقی" },
        { title: "شهر: ", value: item.cityName },
        { title: "شماره ثابت: ", value: item.phone },
        { title: "شماره همراه: ", value: item.mobile },
        { title: "تعداد انبار: ", value: item.warehouseCount },
        { title: "ایمیل: ", value: item.email },
        { title: "وضعیت لاگین: ", value: item.loginActive ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`${item.supplierName}`}
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
