import ACL from "components/ACL"
import { Card as AntCard } from "antd"
import { Skeleton } from 'antd'
import "components/utils/card/card.scss"

function Card({ loading, children, ...rest }) {
    return (
        <Skeleton loading={loading} avatar active>
            <AntCard
                className="card"
                {...rest}
            >
                {children}
            </AntCard>
        </Skeleton>
    )
}

export default ACL(Card)