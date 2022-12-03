import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteLeaderBoard } from "store/actions/leaderBoard"

function CardItem({ item, loading }) {
    const children = [
        { title: "تاریخ شروع: ", value: item.startDateTime },
        { title: "تاریخ پایان: ", value: item.endDateTime },
        { title: "وضعیت: ", value: item.status === 1 ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "حداکثر تعداد استفاده: ", value: item.maxUser },
        { title: "پیوند یکتا: ", value: item.slug },
        { title: "تعداد استفاده: ", value: item.customerUsed },
        { title: "تعداد فایل: ", value: item.fileCount },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`عنوان: ${item.title}`}
                cover={<img src={item.logo} width="40" height="40" />}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./reagent-condition/${item.ID}`} state={{ name: item.title }}>
                            <Icon key="marketers" type="marketers" title="شرط کد معرف" />
                        </Link>
                        <Link to={`./login-count/${item.ID}`} state={{ name: item.title }}>
                            <Icon key="enter" type="enter" title="شرط تعداد ورود" />
                        </Link>
                        <Link to={`./profile-condition/${item.ID}`} state={{ name: item.title }}>
                            <Icon key="roles" type="roles" title="شرط تکمیل پروفایل" />
                        </Link>
                        <Link to={`./order-condition/${item.ID}`} state={{ name: item.title }}>
                            <Icon key="cart" type="cart" title="شرط تعداد سفارش" />
                        </Link>
                        <Link to={`./price-condition/${item.ID}`} state={{ name: item.title }}>
                            <Icon key="price" type="price" title="شرط ارزش سفارش" />
                        </Link>
                        <Link to={`./products-condition/${item.ID}`} state={{ name: item.title }}>
                            <Icon key="accessories" type="accessories" title="شرط کالایی" />
                        </Link>
                        <Link to={`./game-condition/${item.ID}`} state={{ name: item.title }}>
                            <Icon key="game" type="game" title="بازی ها" />
                        </Link>
                        <Link to={`./prize-condition/${item.ID}`} state={{ name: item.title }}>
                            <Icon key="gift" type="gift" title="جایزه ها" />
                        </Link>
                        <Link to={`./edit/${item.ID}`}>
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Popconfirm
                            title={`آیا از حذف تابلو کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteLeaderBoard({ ID: item.ID })}
                        >
                            <Icon key="delete" type="delete" />
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
