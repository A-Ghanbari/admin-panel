import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { setFilter } from "store/actions/filter"
import { dispatch } from "store"
import { getOrderWarehouseLogs, exitOrderWarehouse, revertOrderWarehouse, sendToBarcodeReader } from "store/actions/order"
import { ORDER_WAREHOUSE_EXIT_LOG as entity } from "tools/utils/entities"
import { checkFilters, gregorianToJalali } from "tools/utils"
import { PAGE_SIZE } from "tools/shared/constants"
import Detail from 'components/order/exit/actions/Detail'
import FailedOrder from 'components/order/exit/actions/FailedOrder'
import WaitingOrder from "components/order/exit/actions/WaitingOrder"
import Print from 'components/order/exit/actions/Print'
import Link from "components/utils/link"
import ListComposed from "components/utils/listComposed"
import Icon from "components/utils/field/Icon"
import Card from "components/order/exit/Card"
import Filter from "components/order/exit/Filter"
import Popconfirm from "components/utils/popconfirm"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import "components/order/order.scss"

function List() {
    const [printVisible, setPrintVisible] = useState(false)
    const [printData, setPrintData] = useState({})

    const [detailVisible, setDetailVisible] = useState(false)
    const [detailData, setDetailData] = useState({})

    const [failedVisible, setFailedVisible] = useState(false)
    const [failedData, setFailedData] = useState({})

    const [waitingVisible, setWaitingVisible] = useState(false)
    const [waitingData, setWaitingData] = useState({})

    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    const columns = [
        {
            title: 'ردیف',
            key: 'index',
            width: '5%',
            render: (text, record, index) => index + 1
        }, {
            title: 'کد',
            key: 'ID',
            width: '5%',
        }, {
            title: 'نام کاربر',
            key: 'userName',
            width: '5%',
        }, {
            title: 'تعداد',
            key: 'totalOrdersCount',
            width: '10%',
        }, {
            title: 'ناموفق',
            key: 'failedOrdersCount',
            width: '10%',
            render: (f, r) => (
                <Button
                    label={r.failedOrdersCount}
                    shape="circle"
                    type="secondary-accent"
                    icon={<Icon title="جزییات" key="eye" type='eye' />}
                    onClick={() => {
                        setFailedVisible(!failedVisible)
                        setFailedData({ ID: r.ID, list: r.failedOrdersList })
                    }}
                />
            )
        }, {
            title: 'از سفارش',
            key: 'orderFrom',
            width: '10%',
        }, {
            title: 'تا سفارش',
            key: 'orderTo',
            width: '10%',
        }, {
            title: 'از تاریخ',
            key: 'orderDateFrom',
            width: '5%',
        }, {
            title: 'تا تاریخ',
            key: 'orderDateTo',
            width: '10%',
        }, {
            title: 'تاریخ ایجاد',
            key: 'createdDateTime',
            width: '5%',
        }, {
            title: 'مانده در رکورد',
            key: 'ordersInWating',
            width: '5%',
            render: (f, r) => (
                <Button
                    shape="circle"
                    type="secondary-accent"
                    icon={<Icon title="جزییات" key="eye" type='eye' />}
                    label={r.ordersInWating}
                    onClick={() => {
                        setWaitingVisible(!waitingVisible)
                        setWaitingData({ ID: r.ID })
                    }}
                />
            )
        }, {
            title: 'وضعیت',
            key: 'status',
            width: '5%',
        }, {
            title: 'پست',
            key: 'postCompanyName',
            width: '5%',
        }, {
            title: 'تاریخ تحویل به پست',
            key: 'deliveryDate',
            width: '5%',
        }, {
            title: '',
            key: 'actions',
            width: '10%',
            render: (f, r) => (
                <div className='actions'>
                    <Icon title="جزییات" key="eye" type='eye'
                        onClick={() => {
                            setDetailVisible(!detailVisible)
                            setDetailData({ ID: r.ID })
                        }} />
                    <Icon title="پرینت" key="print" type='print' permission="warehouseExitPrintLabelPermission"
                        onClick={() => {
                            setPrintVisible(!printVisible)
                            setPrintData({ ID: r.ID, isOut: r.isOut })
                        }} />
                    {r.isIn &&
                        <>
                            <Popconfirm
                                title={`آیا از خروج رکورد "${r.ID}" اطمینان دارید؟`}
                                onConfirm={() => exitOrderWarehouse({ ID: r.ID, status: 2 })}
                            >
                                <Icon title="خروج از انبار" key="exit" type='exit' />
                            </Popconfirm>
                            <Popconfirm
                                title={`آیا از ارسال به بارکدخوان, رکورد "${r.ID}" اطمینان دارید؟`}
                                onConfirm={() => sendToBarcodeReader({ ID: r.ID })}
                            >
                                <Icon title="ارسال به بارکدخوان" key="barcodeReader" type='barcodeReader' />
                            </Popconfirm>
                        </>
                    }
                    {r.isOut &&
                        <>
                            <Popconfirm
                                title={`آیا از بازگشت خروج رکورد "${r.ID}" اطمینان دارید؟`}
                                onConfirm={() => revertOrderWarehouse({ ID: r.ID })}
                                permission="warehouseExitRevertPermission"
                            >
                                <Icon title="بازگشت از خروج" key="enter" type='enter' />
                            </Popconfirm>
                            <Link to={`./sendToPost/${r.ID}`} title="تحویل به پست"><Icon key="post" type='post' /></Link>
                        </>
                    }
                </div>
            )
        }
    ]

    useEffect(() => {
        getOrderWarehouseLogs({ ...filter.order.exit })
    }, [filter.order.exit, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            order: {
                ...filter.order,
                exit: checkFilters({
                    ...filter.order.exit,
                    ...values,
                    pageIndex: 1
                })
            }
        }))
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            order: {
                ...filter.order,
                exit: {
                    ...filter.order.exit,
                    pageIndex: index,
                    pageSize: size
                }
            }
        }))
    }

    return (
        <div>
            {failedVisible && <FailedOrder show={failedVisible} change={setFailedVisible} data={failedData} />}
            {waitingVisible && <WaitingOrder show={waitingVisible} change={setWaitingVisible} ID={waitingData.ID} />}
            {detailVisible && <Detail show={detailVisible} change={setDetailVisible} ID={detailData.ID} />}
            {printVisible && <Print show={printVisible} change={setPrintVisible} data={printData} />}
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{
                    ...filter.order.exit,
                    orderDateFrom: gregorianToJalali(filter.order.exit.orderDateFrom),
                    orderDateTo: gregorianToJalali(filter.order.exit.orderDateTo)
                }}
            />
            <ActionButton position="right">
                <Link to='./create' >
                    <Button
                        type="secondary-accent"
                        label="ایجاد رکورد جدید"
                    />
                </Link>
            </ActionButton>
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}

export default List