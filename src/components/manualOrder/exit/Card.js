import { useState } from "react"
import { exitOrderManualWarehouse, revertOrderManualWarehouse, sendToBarcodeReader } from "store/actions/manualOrder"
import Icon from "components/utils/field/Icon"
import { Col } from "components/utils/grid"
import Card from "components/utils/card"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import Print from 'components/manualOrder/exit/actions/Print'

function CardItem({ item, loading }) {
    const [printVisible, setPrintVisible] = useState(false)
    const [printData, setPrintData] = useState({})

    const children = [
        { title: 'کاربر: ', value: item.userName },
        { title: 'تعداد: ', value: item.totalOrdersCount },
        { title: 'از تاریخ: ', value: item.orderFrom },
        { title: 'تا تاریخ: ', value: item.orderTo },
        { title: 'پست: ', value: item.postCompanyName },
        { title: 'وضعیت: ', value: item.status },
    ]

    return (
        <Col xs={24} sm={12}>
            <Card
                key={item.ID}
                title={`کد: ${item.ID}`}
                loading={loading}
                actions={[
                    <div className='actions'>
                        <Icon title="پرینت" key="print" type='print' permission="warehouseExitManualPrintAccumulativePermission"
                            onClick={() => {
                                setPrintVisible(!printVisible)
                                setPrintData({ ID: item.ID, isOut: item.isOut })
                            }} />
                        {item.isIn &&
                            <>
                                <Popconfirm
                                    title={`آیا از خروج رکورد "${item.ID}" اطمینان دارید؟`}
                                    onConfirm={() => exitOrderManualWarehouse({ ID: item.ID, status: 2 })}
                                >
                                    <Icon title="خروج از انبار" key="exit" type='exit' />
                                </Popconfirm>
                                <Popconfirm
                                    title={`آیا از ارسال به بارکدخوان, رکورد "${item.ID}" اطمینان دارید؟`}
                                    onConfirm={() => sendToBarcodeReader({ ID: item.ID })}
                                >
                                    <Icon title="ارسال به بارکدخوان" key="barcodeReader" type='barcodeReader' />
                                </Popconfirm>
                            </>
                        }
                        {item.isOut &&
                            <>
                                <Popconfirm
                                    title={`آیا از بازگشت خروج رکورد "${item.ID} "اطمینان دارید؟`}
                                    onConfirm={() => revertOrderManualWarehouse({ ID: item.ID })}
                                    permission="warehouseExitManualRevertPermission"
                                >
                                    <Icon title="بازگشت از خروج" key="enter" type='enter' />
                                </Popconfirm>
                                <Link to={`./sendToPost/${item.ID}`} title="تحویل به پست"><Icon key="post" type='post' /></Link>
                            </>
                        }
                    </div>
                ]}
            >
                <ul>
                    {children.map((child) => (
                        <li key={`${item.ID}_${child.title}`}>
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
