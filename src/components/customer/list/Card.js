import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { editCustomerPassword } from "store/actions/customer"

function CardItem({ item, loading }) {
    const children = [
        { title: "نام کاربری: ", value: item.userName },
        { title: "نام: ", value: item.firstName },
        { title: "نام خانوادگی: ", value: item.lastName },
        { title: "جنسیت: ", value: item.gender },
        { title: "تاریخ عضویت: ", value: item.registerDate },
        { title: "وضعیت: ", value: item.isActive },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.userName}
                title={`نام کاربری: ${item.userName}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./detail/${item.userName}`} title="جزییات">
                            <Icon key="eye" type="eye" />
                        </Link>
                        <Link
                            to={`./edit/${item.userName}`}
                            title="ویرایش"
                            permission="editMarketer"
                        >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Link
                            to={`./wallet/${item.userName}`}
                            title="کیف پول"
                            permission="customerShowWalletPermission"
                        >
                            <Icon key="wallet" type="wallet" />
                        </Link>
                        <Popconfirm
                            title={`آیا از تغییر کلمه عبور کاربر "${item.userName}" اطمینان دارید؟`}
                            onConfirm={() => editCustomerPassword({ userName: item.userName })}
                            permission="changeMarketerPassword"
                        >
                            <Icon title="تغییر رمز عبور" key="lock" type='lock' />
                        </Popconfirm>
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
