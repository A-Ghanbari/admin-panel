import { deleteManualOrder } from "store/actions/manualOrder"
import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import PostImage from "components/utils/postImage"

function CardItem({ item, loading }) {
    const children = [
        { title: "کد: ", value: item.manualOrderID },
        { title: "نام کاربر: ", value: item.fullName },
        { title: "نوع: ", value: item.manualOrderTypeName },
        { title: "تاریخ: ", value: item.createdDateTime },
        { title: "سازنده: ", value: item.userCreated },
        { title: "وضعیت: ", value: item.orderStatus },
        {
            title: "بارگیری : ",
            value: {
                0: <span className="unapproved" title="بارگیری‌نشده" />,
                1: <span className="awaiting" title="در انتظار تایید نهایی" />,
                2: <span className="approved" title="خروج از انبار" />
            }[item.orderTrans]
        },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.originalOrderID}
                title={`شماره سفارش: ${item.originalOrderID}`}
                loading={loading}
                cover={<PostImage companyId={item.postCompanyID} />}
                actions={[
                    <div className="actions" >
                        <Link to={`./detail/${item.manualOrderID}`} title="جزییات">
                            <Icon key="eye" type="eye" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف سفارش اپراتوری کد "${item.manualOrderID}" اطمینان دارید؟`}
                            onConfirm={() => deleteManualOrder({ manualOrderID: item.manualOrderID })}
                            permission="deleteOrderManual"
                        >
                            <Icon title="حذف" key="delete" type="delete" />
                        </Popconfirm>
                    </div>
                ]}
            >
                <ul>
                    {children.map((child) => (
                        <li key={`${item.originalOrderID}_${child.value}`}>
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
