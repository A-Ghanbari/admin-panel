import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteBlogFaq } from "store/actions/blog"

function CardItem({ item, loading }) {
    const children = [
        { title: "سوال: ", value: item.question },
        { title: "پاسخ: ", value: item.answer },
        { title: "محتوا: ", value: item.contentName },

    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.id}
                title={`کد: "${item.id}"`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link
                            to={`./edit/${item.id}`}
                            title="ویرایش"
                        >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف سوال کد "${item.id} "اطمینان دارید؟`}
                            onConfirm={() => deleteBlogFaq({ id: item.id })}
                        >
                            <Icon key="delete" type="delete" />
                        </Popconfirm>
                    </div>
                ]}
            >
                <ul>
                    {children.map((child,index) => (
                        <li key={`${index}_${child.value}`}>
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
