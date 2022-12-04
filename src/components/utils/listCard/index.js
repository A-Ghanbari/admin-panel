import { Row } from "components/utils/grid"
import "components/utils/listCard/listCard.scss"
import { useSelector } from "react-redux"

function ListCard({ data, entity, card: Card, rowKey = "ID" }) {
    // const { dataList, loading } = useSelector((s) => s[entity.pluralizeName]);
    return (
        <div>
            <Row className="list-card ">
                {data.map((item) => (
                    <Card key={item[rowKey]} item={item} />
                ))}
            </Row>
        </div>
    )
}

export default ListCard
