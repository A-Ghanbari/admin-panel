import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteProductColor } from "store/actions/product"

function CardItem({ item, loading }) {
    const children = [
        { title: " گروه : ", value: item.categoryName },
        { title: "کد رنگ : ", value: <div className="card-color-code" style={{ backgroundColor: `${item.colorCode}` }} /> },
        { title: "تعداد کالا: ", value: item.productCount },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تاریخ ساخت: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`نام: ${item.title}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./detail/${item.ID}`} title="جزییات">
                            <Icon key="eye" type="eye" />
                        </Link>
                        <Link
                            to={`./edit/${item.ID}`}
                            title="ویرایش"
                        >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف رنگ با کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteProductColor({ ID: item.ID })}
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