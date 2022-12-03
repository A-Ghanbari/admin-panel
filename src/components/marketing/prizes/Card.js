import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deletePrizes } from "store/actions/leaderBoard"

function CardItem({ item, loading }) {
    const children = [
        { title: "وضعیت: ", value: item.status === 1 ? <span className="approved" /> : <span className="unapproved" /> },
        { title: "سازنده: ", value: item.userCreated },
        { title: "تعداد تابلوی امتیاز: ", value: item.leaderBoardsCount },
        { title: "تعداد بازی: ", value: item.playedCount },
        { title: "تاریخ ساخت: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`عنوان: " ${item.title}"`}
                cover={<img src={item.logo} width="40" height="40" alt="تصویر"/>}
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
                            title={`آیا از حذف جایزه با کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deletePrizes({ ID: item.ID })}
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