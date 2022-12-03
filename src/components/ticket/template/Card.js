import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteTicketsTemplate } from "store/actions/ticket"

function CardItem({ item, loading }) {
    const children = [
        { title: "سازنده نمونه پاسخ: ", value: item.userCreatedName },
        { title: "نوع تیکت: ", value: item.ticketTypeName },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`عنوان: ${item.title}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./edit/${item.ID}`}>
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف پاسخ نمونه کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteTicketsTemplate({ ID: item.ID })}
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