import { getPackingBarcodeInfo } from "store/actions/packing"
import { Input } from "components/utils/field/input"
import { ColumnGrid } from "components/utils/grid"
import { useState } from "react"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 8 }

export default function BarcodeScan({ barcodeHandler, setOrderInfo, setLabelInfo, setProductInfo }) {
    const [disableBarcodeInput, setDisableBarcodeInput] = useState(false)

    const handlePressEnter = (e) => {
        const barcode = e.target.value
        getPackingBarcodeInfo({
            barcodeValue: barcode
        }).then((res) => {
            if (res.exceptionID === 0) {
                setOrderInfo(res.data.orderFactor)
                setLabelInfo(res.data.labelItems)
                setProductInfo(res.data.orderFactor.productItems)
                setDisableBarcodeInput(true)
                barcodeHandler(true)
            }
        })
    }

    return (
        <div>
            <h1>دریافت اطلاعات سفارش</h1>
            <ColumnGrid col={fieldCol}>
                <Input
                    autoFocus
                    name="barcode"
                    placeholder="اسکن بارکد"
                    onPressEnter={handlePressEnter}
                    disabled={disableBarcodeInput}
                />
            </ColumnGrid>
        </div>
    )
}