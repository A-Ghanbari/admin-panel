import { deleteTicketsRoles } from "store/actions/ticket"
import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Popconfirm from "components/utils/popconfirm"

function CardItem({ item, loading }) {
    const children = [
        { title: "نام کاربر: ", value: item.userName },
        { title: "عنوان دسترسی: ", value: item.ticketTypeName },
        { title: "تاریخ دسترسی: ", value: item.updatedDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`کد کاربر: ${item.userID}`}
                loading={loading}
                actions={[
                    <div className="actions">
                       <Popconfirm
                        title={`آیا از حذف دسترسی کد "${item.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteTicketsRoles({ ID: item.ID })}
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