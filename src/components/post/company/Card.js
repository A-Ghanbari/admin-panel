import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deletePostCompanies } from "store/actions/post"

function CardItem({ item, loading }) {
    const children = [
        { title: "نام شهر: ", value: item.cityName },
        { title: "کد استان: ", value: item.provinceCode },
        { title: "کد شهر: ", value: item.cityCode },
        { title: "نوع پست: ", value: item.postOfficeName },
        { title: "فعال: ", value: item.isActive ? <span className="approved" /> : <span className="unapproved" /> },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`استان: ${item.provinceName}`}
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
                            title={`آیا از حذف شهر کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deletePostCompanies({ ID: item.ID })}
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
