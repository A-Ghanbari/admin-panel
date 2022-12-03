import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import { deleteQuestionnaireQA } from "store/actions/questionnaire"

function CardItem({ item, loading }) {
    const children = [
        { title: "عنوان گروه: ", value: item.parentTitle },
        { title: "عنوان: ", value: item.title },
        { title: "ایجاد کننده: ", value: item.userCreated },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
        { title: "اولویت: ", value: item.sort },
        { title: "پاسخ: ", value: item.isAnswer === 1 ? <span className="approved" /> : <span className="unapproved" /> },
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
                        <Link
                            to={`./edit/${item.ID}`}
                            title="ویرایش"
                        >
                            <Icon key="edit" type="edit" />
                        </Link>
                        <Popconfirm
                            title={`آیا از گروه بندی با کد "${item.ID} "اطمینان دارید؟`}
                            onConfirm={() => deleteQuestionnaireQA({ ID: item.ID })}
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