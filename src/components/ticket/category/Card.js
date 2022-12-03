import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteTicketsCategory } from "store/actions/ticket"

function CardItem({ item, loading }) {
    const children = [
        { title: " عنوان: ", value: item.titleName },
        { title: "فعال: ", value: item.isActive ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "دریافت اطلاعات: ", value: item.hasValue ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "عنوان اطلاعات: ", value: item.valueName },
        { title: "گروه بالاسری: ", value: item.parentName },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`کد: ${item.ID}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./edit/${item.ID}`} title="ویرایش عنوان">
                            <Icon key="edit" type='edit' />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف عنوان کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteTicketsCategory({ ID: item.ID })}
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