import Card from "components/utils/card"
import Print from "components/centralExchange/list/actions/Print"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import PostImage from "components/utils/postImage"
import Popconfirm from "components/utils/popconfirm"
import { deleteCentralExchangeSinglePallet } from "store/actions/centralExchange"
import { useState } from "react"

function CardItem({ item, loading }) {
    const [printVisible, setPrintVisible] = useState(false)
    const [printData, setPrintData] = useState({})

    const children = [
        { title: "دریافت کننده: ", value: item.postReceiverName || "نامشخص" },
        { title: "شعبه: ", value: item.branchName },
        { title: "تعداد جعبه: ", value: item.boxCount },
        { title: "تاریخ ایجاد: ", value: item.createdDateTime },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`سازنده بسته: ${item.userCreatedName}`}
                loading={loading}
                cover={<PostImage companyId={item.postCompany} />}
                actions={[
                    <div className="actions">
                        <Icon title="بیشتر" key="more" type='more'
                            onClick={() => {
                                setPrintVisible(!printVisible)
                                setPrintData({ ID: item.ID })
                            }} />
                        <Popconfirm
                            title={`آیا از حذف پالت "${item.ID}" اطمینان دارید؟`}
                            onConfirm={() => deleteCentralExchangeSinglePallet({ ID: item.ID })}
                        >
                            <Icon title="حذف" key="delete" type='delete' />
                        </Popconfirm>
                    </div>
                ]}
            >
                <ul>
                    {children.map((child) => (
                        <li key={`${item.ID}_${child.value}`}>
                            <span className="bold">{child.title}</span>
                            {child.value}
                        </li>
                    ))}
                </ul>
            </Card>
            {printVisible && <Print show={printVisible} change={setPrintVisible} data={printData} />}
        </Col>
    )
}

export default CardItem
