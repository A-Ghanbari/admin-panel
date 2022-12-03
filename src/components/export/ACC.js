import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { printAccumulative } from "store/actions/export"

export default function ACC() {
    const { ID } = useParams()
    const [data, setData] = useState("")

    useEffect(() => {
        setData(printAccumulative({ ID }))
    }, [ID])

    return (
        <>
            {data}
        </>
    )
}