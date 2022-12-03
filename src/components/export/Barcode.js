import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { printBarcode } from "store/actions/export"

export default function Barcode() {
    const { ID } = useParams()
    const [data, setData] = useState("")

    useEffect(() => {
        setData(printBarcode({ ID }))
    }, [ID])

    return (
        <>
            {data}
        </>
    )
}