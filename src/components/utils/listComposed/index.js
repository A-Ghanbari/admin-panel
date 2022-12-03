import ListCard from "components/utils/listCard";
import Pagination from "components/utils/pagination";
import Table from "components/utils/table";
import useWindowSize from "hooks/useWindowSize";
import { useMemo } from "react";

function ListComposed({ entity, handlerChange, ...props }) {
    const { width } = useWindowSize();

    const showType = useMemo(() => {
        return width <= 767 ? "card" : "table";
    }, [width]);

    return (
        <>
            <Pagination entity={entity} onChange={handlerChange} />
            {showType === "table" ? (
                <Table {...props} entity={entity} />
            ) : (
                <ListCard {...props} entity={entity} />
            )}
            <Pagination entity={entity} onChange={handlerChange} />
        </>
    );
}

export default ListComposed;