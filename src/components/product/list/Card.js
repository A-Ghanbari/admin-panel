import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteProduct } from "store/actions/product"

function CardItem({ item, loading }) {
    const children = [
        { title: "محصول: ", value: item.productName },
        { title: "برند: ", value: item.brandName },
        { title: "گروه: ", value: item.categoryName },
        { title: "موجودی در سایت: ", value: item.count },
        { title: "موجودی در انتظار فروش: ", value: item.reservedCount },
        { title: "فعال: ", value: item.isInactive ? <span className="unapproved" /> : <span className="approved" /> },
        { title: "قابل فروش: ", value: item.salable ? <span className="approved" /> : <span className="unapproved" /> },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`کد: ${item.ID}`}
                cover={<a href={item.picLink} target="blank"><img src={item.picLink} width="40" height="40" /></a>}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./preview/${item.ID}`}>
                            <Icon key="global" type="global" title="پیش نمایش" />
                        </Link>
                        <Link to={`./detail/${item.ID}`}>
                            <Icon key="eye" type="eye" title="مشاهده جزئیات" />
                        </Link>
                        <Link to={`./edit/${item.ID}`}>
                            <Icon key="edit" type="edit" title="ویرایش محصول" />
                        </Link>
                        <Link to={`./warehouse/${item.ID}`}>
                            <Icon key="warehouse" type="warehouse" title="ویرایش انبار" />
                        </Link>
                        <Link to={`./change-count/${item.ID}`} state={{ name: item.productName }}>
                            <Icon key="inventory" type="inventory" title="ویرایش موجودی" />
                        </Link>
                        <Link to={`./price/${item.ID}`}>
                            <Icon key="price" type="price" title="ویرایش قیمت" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف محصول کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteProduct({ ID: item.ID })}
                        >
                            <Icon key="delete" type="delete" title="حذف محصول" />
                        </Popconfirm>                    </div>
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