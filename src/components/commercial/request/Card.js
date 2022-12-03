import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"

function CardItem({ item, loading }) {
    const children = [
        { title: "شناسه درخواست: ", value: item.ID },
        { title: "عنوان: ", value: item.title },
        { title: "انبار تامین کننده: ", value: item.supplierWarehouseName },
        { title: "نوع تحویل: ", value: item.deliveryTypeName },
        { title: "تعداد محصول: ", value: item.requestProductCount },
        { title: "در انتظار تایید مدیر: ", value: item.waitForCommerceManager },
        { title: "در انتظار تایید انبار: ", value: item.waitForWarehouseManager },
        { title: "تعداد تایید شده: ", value: item.acceptedRequests },
        { title: "تعداد تایید نشده: ", value: item.notAcceptedRequests },
        { title: "وضعیت: ", value: item.statusName },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تاریخ ساخت: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`تامین کننده:${item.supplierName}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Icon key="eye" type="eye" />
                        <Icon key="edit" type="edit" />
                        <Icon key="delete" type="delete" />
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
