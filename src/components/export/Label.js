import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { printLabel } from "store/actions/export"

export default function Label() {
    const { ID } = useParams()
    const [data, setData] = useState("")

    useEffect(() => {
        setData(printLabel({ ID }))
    }, [ID])

    return (
        <>
            {data}
        </>
    )
}