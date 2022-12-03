import { deleteGroup } from "store/actions/product"
import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"

function CardItem({ item, loading }) {
    const children = [
        { title: " گروه بالاسری: ", value: item.parentName },
        { title: "کد گروه بالاسری: ", value: item.parentID },
        { title: "فعال: ", value: item.isActive ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "اولویت: ", value: item.sort },
        { title: "توضیحات: ", value: item.description },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`نام: ${item.name}`}
                loading={loading}
                cover={<img src={item.picLink} width="40" height="40" />}
                actions={[
                    <div className="actions">
                        <Link to={`./create-attribute`} state={{ ID: item.ID, name: item.name }}>
                            <Icon key="add" type="add" title="ایجاد ویژگی" />
                        </Link>
                        <Link to={`./attributes`} state={{ ID: item.ID, name: item.name }}>
                            <Icon key="eye" type="eye" title="مشاهده ویژگی ها" />
                        </Link>
                        <Link to={`./create-color`} state={{ ID: item.ID, name: item.name }}>
                            <Icon key="color" type="color" title="ایجاد رنگ" />
                        </Link>
                        <Link to={`./color-list`} state={{ ID: item.ID, name: item.name }}>
                            <Icon key="colors" type="colors" title="مشاهده رنگ ها" />
                        </Link>
                        <Link to={`./edit/${item.ID}`}>
                            <Icon key="edit" type="edit" title="ویرایش گروه" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف گروه کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteGroup({ ID: item.ID })}
                        >
                            <Icon key="delete" type="delete" title="حذف گروه" />
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