import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"

function CardItem({ item, loading }) {
    const children = [
        { title: "نقش: ", value: item.roleName },
        { title: "نام کاربری: ", value: item.userName },
        { title: "وضعیت: ", value: item.status ? <span className="approved" /> : <span className="unapproved" /> },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`${item.firstName} ${item.lastName}`}
                cover={<img src={item.photo} width="40" height="40" />}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./detail/${item.ID}`} title="جزئیات کاربر" >
                            <Icon key="eye" type="eye" />
                        </Link>
                        <Link to={`./edit/${item.ID}`} title="ویرایش کاربر" >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Link to={`./change-password/${item.userName}`} title="تغییر کلمه عبور" >
                            <Icon key="lock" type="lock" />
                        </Link>
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
