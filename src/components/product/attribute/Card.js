import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteProductAttribute } from "store/actions/product"

function CardItem({ item, loading }) {
    const children = [
        { title: "گروه: ", value: item.categoryName },
        { title: "ویژگی بالاسری: ", value: item.parentName },
        { title: "کد ویژگی بالاسری: ", value: item.parentID },
        { title: "توضیحات: ", value: item.description },
        { title: "نوع نمایش: ", value: item.selectTypeName },
        { title: "شاخص: ", value: item.necessaryForCommerceRequest ? <span className="approved" /> : <span className="unapproved" /> },
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
                        <Link to={`./edit/${item.ID}`}>
                            <Icon key="edit" type="edit" title="ویرایش ویژگی" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف ویژگی  "${item.title}" اطمینان دارید؟`}
                            onConfirm={() => deleteProductAttribute({ ID: item.ID })}
                        >
                            <Icon key="delete" type="delete" title="حذف ویژگی" />
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