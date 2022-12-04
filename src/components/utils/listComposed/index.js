import ListCard from "components/utils/listCard"
import Pagination from "components/utils/pagination"
import Table from "components/utils/table"
import useWindowSize from "hooks/useWindowSize"
import { useMemo } from "react"

function ListComposed({ data, entity, handlerChange, ...props }) {
    const { width } = useWindowSize()

    const showType = useMemo(() => {
        return width <= 767 ? "card" : "table"
    }, [width])

    return (
        <>
            <Pagination entity={entity} onChange={handlerChange} />
            {showType === "table" ? (
                <Table data={data} {...props} entity={entity} />
            ) : (
                <ListCard data={data} {...props} entity={entity} />
            )}
            <Pagination entity={entity} onChange={handlerChange} />
        </>
    )
}

export default ListComposed
