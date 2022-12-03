import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { exitOrderManualWarehouse, getManualOrderWarehouseLogs, revertOrderManualWarehouse, sendToBarcodeReader } from "store/actions/manualOrder"
import { MANUAL_ORDER_WAREHOUSE_EXIT as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import FailedOrder from "components/manualOrder/exit/actions/FailedOrder"
import Print from 'components/manualOrder/exit/actions/Print'
import ListComposed from "components/utils/listComposed"
import Card from "components/manualOrder/exit/Card"
import Icon from "components/utils/field/Icon"
import Link from "components/utils/link"
import Filter from "components/manualOrder/exit/Filter"
import Popconfirm from "components/utils/popconfirm"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"

export default function Exit() {
    const [printVisible, setPrintVisible] = useState(false)
    const [printData, setPrintData] = useState({})

    const [failedVisible, setFailedVisible] = useState(false)
    const [failedData, setFailedData] = useState({})

    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getManualOrderWarehouseLogs({ ...filter.manualOrder.exit })
    }, [filter.manualOrder.exit, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            manualOrder: {
                ...filter.manualOrder,
                exit: checkFilters({
                    ...filter.manualOrder.exit,
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
            manualOrder: {
                ...filter.manualOrder,
                exit: {
                    ...filter.manualOrder.exit,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

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
                    shape="circle"
                    type="secondary-accent"
                    icon={<Icon title="جزییات" key="eye" type='eye' />}
                    label={r.failedOrdersCount}
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
                    <Icon title="پرینت" key="print" type='print' permission="warehouseExitManualPrintAccumulativePermission"
                        onClick={() => {
                            setPrintVisible(!printVisible)
                            setPrintData({ ID: r.ID, isOut: r.isOut })
                        }} />
                    {r.isIn &&
                        <>
                            <Popconfirm
                                title={`آیا از خروج رکورد "${r.ID}" اطمینان دارید؟`}
                                onConfirm={() => exitOrderManualWarehouse({ ID: r.ID, status: 2 })}
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
                                title={`آیا از بازگشت خروج رکورد "${r.ID} "اطمینان دارید؟`}
                                onConfirm={() => revertOrderManualWarehouse({ ID: r.ID })}
                                permission="warehouseExitManualRevertPermission"
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

    return (
        <div>
            {failedVisible && <FailedOrder show={failedVisible} change={setFailedVisible} data={failedData} />}
            {printVisible && <Print show={printVisible} change={setPrintVisible} data={printData} />}
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{
                    ...filter.manualOrder.exit,
                    orderDateFrom: gregorianToJalali(filter.manualOrder.exit.orderDateFrom),
                    orderDateTo: gregorianToJalali(filter.manualOrder.exit.orderDateTo)
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