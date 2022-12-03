import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { printManualAccumulative } from "store/actions/export"

export default function ACCManual() {
    const { ID } = useParams()
    const [data, setData] = useState("")

    useEffect(() => {
        setData(printManualAccumulative({ ID }))
    }, [ID])

    return (
        <>
            {data}
        </>
    )
}