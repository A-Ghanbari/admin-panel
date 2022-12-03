import { deleteContentSlider } from "store/actions/content"
import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"

function CardItem({ item, loading }) {
    const children = [
        { title: "نوع:", value: item.typeName },
        { title: "گروه:", value: item.categoryName },
        { title: "فعال:", value: item.isActive ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "تاریخ انتشار:", value: item.publishDate },
        { title: "تاریخ ایجاد:", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`عنوان: ${item.title}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        {item.fromExcel &&
                            <Link to={`./productsExcel/${item.ID}`} state={{ name: item.title }} title="آپلود اکسل"><Icon key="excelExport" type='excelExport' /></Link>
                        }
                        <Link to={`./edit/${item.ID}`} title="ویرایش"><Icon key="edit" type='edit' /></Link>
                        <Popconfirm
                            title={`آیا از حذف اسلایدر "${item.title}" اطمینان دارید؟`}
                            onConfirm={() => deleteContentSlider({ ID: item.ID })}
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