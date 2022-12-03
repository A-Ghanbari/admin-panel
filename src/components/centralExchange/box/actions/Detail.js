import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getBarcodeStatus, getItem } from 'store/actions/order'
import {
    ORDER as entity,
    ORDER_BARCODE_STATUS as barcodeStatusEntity
} from "tools/utils/entities"
import Skeleton from 'components/utils/skeleton'
import Table from 'components/utils/table'
import List from 'components/utils/list'
import Icon from 'components/utils/field/Icon'
import CustomTable from 'components/utils/table/CustomTable'
import { useNavigate, useParams } from 'react-router-dom'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'

export default function Detail() {
    const { ID } = useParams()
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [barcodeName, setBarcodeName] = useState()
    const transactionList = []

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    const { dataList, loading: barcodeStatusLoading } = useSelector(
        (s) => s[barcodeStatusEntity.pluralizeName]
    )

    const transaction = data.transactionLogs
    const barcode = data.barcodes

    useEffect(() => {
        getItem({ ID })
        dispatch({
            type: barcodeStatusEntity.pluralizeUpperName,
            payload: {
                dataList: [],
            },
        })
    }, [ID])


    const postStatusColumn = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: "بارکد",
            key: "barcodeName"
        }, {
            title: "وزن",
            key: "weight"
        }, {
            title: "پیگیری",
            key: "followup",
            render: (f, r) => (
                <Icon key="eye" type='eye' onClick={() => followupBarcode(r.barcodeName)} />
            )
        }
    ]

    const barcodeStatusColumn = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: "وضعیت",
            key: "TypeTitle"
        }, {
            title: "استان",
            key: "State"
        }, {
            title: "تاریخ",
            key: "TFDate"
        }, {
            title: "توضیح",
            key: "Describe"
        }
    ]

    if (transaction === undefined || barcode === undefined) {
        return <></>
    }

    for (const item of transaction) {
        transactionList.push({
            title: `تاریخ: ${item.transDate}`,
            des: item.description
        })
    }

    const followupBarcode = (barcode) => {
        getBarcodeStatus({
            barcodeName: barcode
        })
        setBarcodeName(barcode)
    }

    return (
        <>
            <div className='section-card'>
                <h1>جزییات سفارش {ID}</h1>
                <Skeleton
                    avatar
                    active
                    loading={loading}
                >
                    {transaction.length &&
                        <div>
                            <List data={transactionList} avatar={<Icon type="calendar" />} />
                            <CustomTable
                                entity={entity}
                                columns={postStatusColumn}
                                dataSource="barcodes"
                                rowKey='barcodeName'
                            />
                            <Skeleton
                                avatar
                                active
                                loading={barcodeStatusLoading}
                            >
                                {dataList.length &&
                                    <>
                                        <h1 className='order-barcode-status'>وضعیت سفارش با بارکد {barcodeName}</h1>
                                        <Table
                                            entity={barcodeStatusEntity}
                                            columns={barcodeStatusColumn}
                                            rowKey='TFDate'
                                        />
                                    </>
                                }
                            </Skeleton>
                        </div>
                    }
                </Skeleton>
                <ActionButton position="center">
                    <Button
                        type="secondary-warning"
                        label="بازگشت"
                        onClick={() => navigate(-1)}
                    />
                </ActionButton>
            </div>
        </>
    )
}