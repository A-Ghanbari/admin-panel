import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCentralExchangeBarcode } from "store/actions/centralExchange"

export default function CentralExchangeBarcode() {
    const { ID } = useParams()
    const [data, setData] = useState("")

    console.log(ID);
    useEffect(() => {
        setData(getCentralExchangeBarcode({ ID }))
    }, [ID])

    return (
        <>
            {data}
        </>
    )
}
