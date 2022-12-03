import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { printManualInvoice } from "store/actions/export"

export default function Invoice() {
    const { ID } = useParams()
    const [data, setData] = useState("")

    useEffect(() => {
        setData(printManualInvoice({ ID }))
    }, [ID])

    return (
        <>
            {data}
        </>
    )
}