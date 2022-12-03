import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteDiscountPrize } from "store/actions/leaderBoard"

function CardItem({ item, loading }) {
    const children = [
        { title: "بازی: ", value: item.gameTitle },
        { title: " شانس: ", value: item.chance },
        { title: "حداکثر کاربر: ", value: item.maxUsedPerUser },
        { title: " حداکثر سفارش: ", value: item.maxUsedPerOrder },
        { title: " انقصا(روز): ", value: item.expireDay },
        { title: " شروع: ", value: item.startDateTime },
        { title: " پایان: ", value: item.endDateTime },
        { title: " نوع تخفیف: ", value: item.discountType },
        { title: "درصدی: ", value: item.isPercent ? <span className="approved" /> : <span className="unapproved" /> },
        { title: " مقدار تخفیف : ", value: item.discount },
        { title: " حدافل قیمت: ", value: item.minItemPrice },
        { title: " حداکثر قیمت: ", value: item.maxPrice },
        { title: "وضعیت: ", value: item.status === 1 ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "ایجاد کننده: ", value: item.userCreated },
        { title: " تاریخ ایجاد: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`عنوان: " ${item.title}"`}
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
                            title={`آیا از حذف بازی با کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteDiscountPrize({ ID: item.ID })}
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