import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteRoleSetting } from "store/actions/role"
import { addCommaToNumber } from "tools/utils"

function CardItem({ item, loading }) {
    const children = [
        { title: "تعداد کاربران: ", value: `${addCommaToNumber(item.countUsers)} نفر` },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`نام نقش: ${item.name}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./users/${item.ID}`} state={{ name: item.name }} title="مشاهده کاربران" >
                            <Icon key="marketers" type="marketers" />
                        </Link>
                        <Link to={`./edit/${item.ID}`} state={{ name: item.name }} title="ویرایش نقش" >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف نقش کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteRoleSetting({ ID: item.ID })}
                        >
                            <Icon title="حذف" key="delete" type='delete' />
                        </Popconfirm>
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
