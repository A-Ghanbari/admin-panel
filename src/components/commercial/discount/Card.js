import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteCommercialDiscount } from "store/actions/commercial"

function CardItem({ item, loading }) {
    const children = [
        { title: "نوع: ", value: item.typeName },
        { title: "فعال: ", value: item.isActive ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "از تاریخ: ", value: item.dateFrom },
        { title: "تا تاریخ: ", value: item.dateTo },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تاریخ ساخت: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`${item.title}`}
                cover={<img src={item.backGroundImage} width="40" height="40" />}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Icon key="excelExport" type="excelExport" />
                        <Link
                            to={`./edit/${item.ID}`}
                            title="ویرایش"
                        >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف نخفیف با کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteCommercialDiscount({ ID: item.ID })}
                        >
                            <Icon key="delete" type="delete" />
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
