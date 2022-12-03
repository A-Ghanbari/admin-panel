import Descriptions from 'components/utils/descriptions'
import { useSelector } from 'react-redux'

function Payment({ dataSource, entity }) {
    const { data } = useSelector(
        (s) => s[entity.name]
    );

    const detail = data[dataSource]

    if (detail === undefined) return (null)

    const columns = [
        {
            label: "وضعیت پرداخت",
            text: detail.status ? "تایید شده" : "در انتظار تایید"
        },
        {
            label: " کد رهگیری",
            text: detail.bankResponse
        },
        {
            label: "تاریخ پرداخت",
            text: detail.payDate
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default Payment