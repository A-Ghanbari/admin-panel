import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { printOrderInvoice } from "store/actions/export"

export default function Invoice() {
    const { ID } = useParams()
    const [data, setData] = useState("")

    useEffect(() => {
        setData(printOrderInvoice({ ID }))
    }, [ID])

    return (
        <>
            {data}
        </>
    )
}