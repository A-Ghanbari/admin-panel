import {
    CUSTOMER as entity,
    CUSTOMER_WALLET_TRANSACTION as walletEntity
} from "tools/utils/entities"
import { useSelector } from "react-redux"
import Skeleton from "components/utils/skeleton"
import Card from "components/utils/card"
import TinyLineChart from "components/utils/chart/TinyLineChart"
import { Line, Tooltip } from "recharts"
import { isEmpty } from "lodash"
import { addCommaToNumber } from "tools/utils"


export default function ReportWallet() {
    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    const { dataList } = useSelector(
        (s) => s[walletEntity.pluralizeName]
    )

    if (isEmpty(data) || isEmpty(dataList)) {
        return (null)
    }

    let revertedDataList = [...dataList].reverse()

    return (
        <div className="report-wallet">
            <Skeleton
                loading={loading}
                avatar
                active
            >
                <Card
                    key={56}
                    title={`موجودی فعلی: ${addCommaToNumber(data.walletStatus.currentBalance / 10)} تومان`}
                    loading={loading}
                    actions={[]}
                >
                    <div className="report-wallet-chart  scroll-x">
                        <TinyLineChart width={300} height={100} data={revertedDataList}>
                            <Tooltip formatter={(value, name, props) => <CustomizedTooltip value={value} props={props} />} />
                            <Line type="monotone" dataKey="changeBalance" stroke="#8884d8" name="گزارش" strokeWidth={2} />
                        </TinyLineChart>
                    </div>
                </Card>
            </Skeleton>
        </div>
    )
}

function CustomizedTooltip({ value, props }) {
    const color = (value > 0) ? "green" : "red"
    return (
        <div>
            <div>تاریخ: {props.payload.transactionDateTime}</div>
            <div>
                <span>تراکنش: </span>
                <span style={{ color: color, direction: "ltr" }}>{addCommaToNumber(value / 10)}</span>
                <span> تومان </span>
            </div>
            <div>علت: {props.payload.transactionTypeName}</div>
            <div>وضعیت: {props.payload.status}</div>
        </div>
    )
}
