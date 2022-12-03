import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteQuestionnaireGroup } from "store/actions/questionnaire"

function CardItem({ item, loading }) {
    const children = [
        { title: "ایجاد کننده: ", value: item.userCreated },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
        { title: "تعداد سوالات: ", value: item.questionCount },
        { title: "تعداد تابلو امتیازات: ", value: item.leaderboardsCount },
        { title: "وضعیت: ", value: item.status === 1 ? <span className="approved" /> : <span className="unapproved" /> },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`عنوان: " ${item.title}"`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Link to={`./createQuestion/${item.ID}`}>
                            <Icon key="createQA" type="questionnaire" title="ساخت سوال" />
                        </Link>
                        <Link
                            to={`./edit/${item.ID}`}
                            title="ویرایش"
                        >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Popconfirm
                            title={`آیا از گروه بندی با کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteQuestionnaireGroup({ ID: item.ID })}
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