import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import { addCommaToNumber } from "tools/utils"

function CardItem({ item, loading }) {
    const children = [
        { title: "عنوان: ", value: item.title },
        { title: "نوع تخفیف: ", value: item.discountTypeName },
        { title: "حداکثر کاربر: ", value: `${addCommaToNumber(item.maxUsedPerUser)} نفر` },
        { title: "حداکثر سفارش کاربر: ", value: `${addCommaToNumber(item.maxUsedPerOrder)} عدد` },
        { title: "تاریخ شروع: ", value: item.startDateTime },
        { title: "تاریخ پایان: ", value: item.endDateTime },
        { title: "درصدی: ", value: item.isPercent ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "عمومی: ", value: item.isPublic ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "مقدار تخفیف: ", value: `${addCommaToNumber(Math.floor(item.discount / 10))} تومان` },
        { title: "حداکثر قیمت: ", value: `${addCommaToNumber(Math.floor(item.maxPrice / 10))} تومان` },
        { title: "وضعیت: ", value: item.status === 1 ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`کد تخفیف: ${item.discountCode}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./cart/${item.ID}`} state={{ name: item.title }} title="سبد خرید">
                            <Icon key="cart" type="cart" />
                        </Link>
                        <Link to={`./order/${item.ID}`} state={{ name: item.title }} title="سفارش">
                            <Icon key="order" type="order" />
                        </Link>
                        <Link to={`./product/${item.ID}`} state={{ name: item.title }} title="محصولات">
                            <Icon key="accessories" type="accessories" />
                        </Link>
                        <Link to={`./city/${item.ID}`} state={{ name: item.title }} title="شهر">
                            <Icon key="city" type="city" />
                        </Link>
                        <Link to={`./customer/${item.ID}`} state={{ name: item.title }} title="مشتریان">
                            <Icon key="marketers" type="marketers" />
                        </Link>
                        <Link to={`./supplier/${item.ID}`} state={{ name: item.title }} title="نامین کننده">
                            <Icon key="postSettings" type="postSettings" />
                        </Link>
                        <Icon key="add" type="add" />
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
