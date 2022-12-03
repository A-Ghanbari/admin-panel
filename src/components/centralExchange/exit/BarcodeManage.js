import { useEffect, useState } from 'react'
import { Input } from 'components/utils/field/input'
import { ColumnGrid } from 'components/utils/grid'
import BarcodeList from 'components/centralExchange/exit/BarcodeList'
import { exitPalette } from 'store/actions/centralExchange'
import Button from 'components/utils/field/button'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6, xxl: 6 }

export default function BarcodeManage({ postInfo }) {
    const paletteID = null
    const [barcodeCount, setBarcodeCount] = useState(0)
    const [barcodeList, setBarcodeList] = useState([])

    const handlePressEnter = (e) => {
        const barcode = e.target.value
        let serviceModel = null
        if (!paletteID) {
            serviceModel = {
                ...postInfo,
                barcodes: [barcode]
            }
        } else {
            serviceModel = {
                ID: paletteID,
                barcodes: [barcode]
            }
        }
        console.log(serviceModel)
        exitPalette(serviceModel).then(
            (res) => {
                console.log(res)

                if (res.data.status) {
                    paletteID = res.data.ID
                    setBarcodeCount(s => (s + 1))
                    setBarcodeList(s => ([...s, barcode]))
                } else {
                    console.log("Error")
                }
            }
        )
    }

    useEffect(() => {
        document.querySelector('input[name="barcodes"]').value = ""
    }, [barcodeCount])

    return (
        <div className='centralExchange-exit-barcode'>
            <h1>ثبت بارکد</h1>
            <ColumnGrid col={fieldCol}>
                <Input
                    autoFocus
                    name="barcodes"
                    placeholder="اسکن بارکد"
                    maxLength={27}
                    onPressEnter={handlePressEnter}
                />
                <Button
                    type="secondary-dark"
                    label="ثبت پالت جدید"
                    onClick={() => window.location.reload()}
                />
            </ColumnGrid>
            <BarcodeList count={barcodeCount} list={barcodeList} />
        </div>
    )
}