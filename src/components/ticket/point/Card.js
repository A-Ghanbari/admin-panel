import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteTicketsPoint } from "store/actions/ticket"

function CardItem({ item, loading }) {
    const children = [
        { title: "امتیاز: ", value: item.score },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
        { title: "فعال: ", value: item.isActive ? <span className="approved" /> : <span className="unapproved" /> },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`عنوان: ${item.title}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./edit/${item.ID}`} title="ویرایش امتیاز">
                            <Icon key="edit" type='edit' />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف امتیاز "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteTicketsPoint({ ID: item.ID })}
                        >
                            <Icon title="حذف" key="delete" type='delete' />
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