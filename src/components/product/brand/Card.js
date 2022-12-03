import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteBrand } from "store/actions/product"

function CardItem({ item, loading }) {
    const children = [
        { title: " نام لاتین: ", value: item.latinName },
        { title: "نمایش در سایت: ", value: item.showInMain ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "توضیحات: ", value: item.description },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`نام: ${item.name}`}
                cover={<img src={item.picLink} width="40" height="40" />}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./edit/${item.ID}`}>
                            <Icon key="edit" type="edit" title="ویرایش برند" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف برند کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteBrand({ ID: item.ID })}
                        >
                            <Icon key="delete" type="delete" title="حذف برند" />
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