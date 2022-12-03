import { useState } from "react"
import BarcodeScan from "components/packing/register/BarcodeScan"
import OrderInfo from "components/packing/register/OrderInfo"
import LabelController from "components/packing/register/LabelController"
import OrderTable from "components/packing/register/orderTable"
import ProductScan from "components/packing/register/ProductScan"
import "components/packing/packing.scss"

export default function Register() {
    const [isBarcodeScan, setIsBarcodeScan] = useState(false)
    const [orderInfo, setOrderInfo] = useState({})
    const [labelInfo, setLabelInfo] = useState([])
    const [productInfo, setProductInfo] = useState([])
    return (
        <div className="section-card">
            <BarcodeScan
                barcodeHandler={setIsBarcodeScan}
                setOrderInfo={setOrderInfo}
                setLabelInfo={setLabelInfo}
                setProductInfo={setProductInfo}
            />
            {
                isBarcodeScan &&
                <>
                    <OrderInfo data={orderInfo} />
                    <LabelController />
                    <ProductScan />
                    <OrderTable dataLabel={labelInfo} dataProduct={productInfo} />
                </>
            }
        </div>
    )
}