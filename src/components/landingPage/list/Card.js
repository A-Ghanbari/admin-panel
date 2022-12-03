import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteLandingPage } from "store/actions/landingPage"

function CardItem({ item, loading }) {
    const children = [
        { title: "نام: ", value: item.fullName },
        { title: "گروه: ", value: item.categoryName },
        { title: "گروه: ", value: item.categoryName },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
        { title: "تاریخ انتشار: ", value: item.publishDate },
        { title: " وضعیت: ", value: item.statusCode },
        { title: "isIndex: ", value: item.isIndex ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "isFollow: ", value: item.isFollow ? <span className="approved" /> : <span className="unapproved" /> },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.id}
                title={`عنوان: ${item.title}`}
                loading={loading}
                actions={[
                    <div className="actions">
                         <Link
                            to={`./edit/${item.ID}`}
                            title="ویرایش"
                        >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف لندینگ  "${item.title} "اطمینان دارید؟`}
                            onConfirm={() => deleteLandingPage({ ID: item.ID })}
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
