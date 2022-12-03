import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Popconfirm from "components/utils/popconfirm"
import { Link } from "react-router-dom"
import { deleteFile } from "store/actions/product"

function CardItem({ item, loading }) {
    const children = [
        { title: "محصول: ", value: item.productName },
        { title: "کد محصول: ", value: item.productID },
        { title: "نوع فایل: ", value: item.fileType },
        { title: "اولویت: ", value: item.sort },
        { title: "فعال: ", value: item.isActive ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تاریخ ساخت: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`نام گروه: ${item.productsMediaFileName}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./edit/${item.ID}`}>
                        <Icon key="edit" type="edit" title="ویرایش فایل" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف فایل کد "${item.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteFile({ ID: item.ID })}
                    >
                        <Icon key="delete" type="delete" title="حذف فایل" />
                    </Popconfirm>
                    <a href={item.filePath} target="blank">
                        <Icon
                            key="download"
                            type="download"
                            title=" دانلود تصاویر"
                        />
                    </a>
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