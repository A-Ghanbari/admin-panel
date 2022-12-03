import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getBarcodeStatus } from 'store/actions/manualOrder'
import { MANUAL_ORDER_BARCODE_STATUS as barcodeStatusEntity } from "tools/utils/entities"
import Skeleton from 'components/utils/skeleton'
import Table from 'components/utils/table'
import Icon from 'components/utils/field/Icon'
import CustomTable from 'components/utils/table/CustomTable'

function Barcode({ dataSource, entity }) {
    const dispatch = useDispatch()
    const [barcodeName, setBarcodeName] = useState()

    useEffect(() => {
        dispatch({
            type: barcodeStatusEntity.pluralizeUpperName,
            payload: {
                dataList: [],
            },
        })
    }, [])

    const { data } = useSelector(
        (s) => s[entity.name]
    )

    const { dataList, loading } = useSelector(
        (s) => s[barcodeStatusEntity.pluralizeName]
    )

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

    if (data[dataSource] === undefined) {
        return <></>
    }

    const followupBarcode = (barcode) => {
        getBarcodeStatus({
            barcodeName: barcode
        })
        setBarcodeName(barcode)
    }

    return (
        <>
            <div>
                <CustomTable
                    entity={entity}
                    columns={postStatusColumn}
                    dataSource={dataSource}
                    rowKey='barcodeName'
                />
                <Skeleton
                    avatar
                    active
                    loading={loading}
                >
                    {dataList.length &&
                        <>
                            <h1 className='order-barcode-status'>وضعیت سفارش با بارکد "{barcodeName}"</h1>
                            <Table
                                entity={barcodeStatusEntity}
                                columns={barcodeStatusColumn}
                                rowKey='TFDate'
                            />
                        </>
                    }
                </Skeleton>
            </div>
        </>
    )
}

export default Barcode