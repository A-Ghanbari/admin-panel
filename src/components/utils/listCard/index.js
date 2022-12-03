import { Row } from "components/utils/grid";
import "components/utils/listCard/listCard.scss";
import { useSelector } from "react-redux";

function ListCard({ entity, card: Card, rowKey = "ID" }) {
    const { dataList, loading } = useSelector((s) => s[entity.pluralizeName]);
    return (
        <div>
            <Row className="list-card ">
                {dataList.map((item) => (
                    <Card key={item[rowKey]} item={item} loading={loading} />
                ))}
            </Row>
        </div>
    );
}

export default ListCard;