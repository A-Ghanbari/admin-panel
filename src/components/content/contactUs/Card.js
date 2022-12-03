import Card from "components/utils/card"
import Detail from "components/content/contactUs/actions/Detail"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import { useState } from "react"

function CardItem({ item, loading }) {
    const [detailVisible, setDetailVisible] = useState(false)
    const [detailData, setDetailData] = useState({})

    const children = [
        { title: "کاربر:", value: item.fullName },
        { title: "تاریخ ارسال:", value: item.createdDateTime },
        { title: "شماره:", value: item.cell },
        { title: "ایمیل:", value: item.email },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={item.title}
                loading={loading}
                actions={[
                    <div className="actions">
                        <Icon title="پرینت" key="eye" type='eye'
                            onClick={() => {
                                setDetailVisible(!detailVisible)
                                setDetailData({ ID: item.ID })
                            }} />
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
            {detailVisible && <Detail show={detailVisible} change={setDetailVisible} ID={detailData.ID} />}

        </Col>
    )
}

export default CardItem