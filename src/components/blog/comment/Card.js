import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteBlogComment } from "store/actions/blog"

function CardItem({ item, loading }) {
    const children = [
        { title: "توضیحات: ", value: item.description },
        { title: "محتوا: ", value: item.contentName },
        {
            title: "وضعیت:", value: {
                0: "در انتظار تایید",
                1: "تایید شده",
                2: "تایید نشده"
            }[item.status]
        },
        { title: "isIndex: ", value: item.isIndex ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "isFollow: ", value: item.isFollow ? <span className="approved" /> : <span className="unapproved" /> },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.id}
                title={`نظر دهنده: ${item.fullName}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link
                            to={`./edit/${item.id}`}
                            title="ویرایش وضعیت"
                        >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف نظر کد "${item.id} "اطمینان دارید؟`}
                            onConfirm={() => deleteBlogComment({ id: item.id })}
                        >
                            <Icon key="delete" type="delete" />
                        </Popconfirm>
                    </div>
                ]}
            >
                <ul>
                    {children.map((child, index) => (
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
