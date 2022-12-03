import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"

function CardItem({ item, loading }) {
    const children = [
        { title: " parentID: ", value: item.parentID },
        { title: "title: ", value: item.title },
        { title: "type: ", value: item.type },
        { title: "sort: ", value: item.sort },
        { title: "controller: ", value: item.controller },
        { title: "action: ", value: item.action },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`${item.name}`}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Icon title="ویرایش" key="edit" type='edit' />
                        <Icon title="حذف" key="delete" type='delete' />
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