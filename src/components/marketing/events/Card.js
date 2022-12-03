import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Popconfirm from "components/utils/popconfirm"
import { deleteEvents } from "store/actions/leaderBoard"

function CardItem({ item, loading }) {
    const children = [
        { title: "والد: ", value: item.parentTitle },
        { title: "تابلوی امتیاز: ", value: item.leaderBoardTitle },
        { title: "امتیاز: ", value: item.point },
        { title: "وضعیت: ", value: item.status === 1 ? <span className="approved" /> : <span className="unapproved" /> },
        { title: " حداکثر کاربر: ", value: item.maxUser },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`عنوان: " ${item.title}"`}
                cover={<img src={item.logo} width="40" height="40" alt="تصویر" />}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Popconfirm
                            title={`آیا از حذف رویداد با کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteEvents({ ID: item.ID })}
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