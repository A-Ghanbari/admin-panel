import { Row } from "components/utils/grid";
import "components/utils/listCard/listCard.scss";
import { useSelector } from "react-redux";
import { list } from "tools/shared/order";

function ListCard({ entity, card: Card, rowKey = "ID" }) {
    // const { dataList, loading } = useSelector((s) => s[entity.pluralizeName]);
    return (
        <div>
            <Row className="list-card ">
                {list.map((item) => (
                    <Card key={item[rowKey]} item={item} />
                ))}
            </Row>
        </div>
    );
}

export default ListCard;