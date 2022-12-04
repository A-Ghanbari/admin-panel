import Descriptions from 'components/utils/descriptions'
import { useSelector } from 'react-redux'
import { detail } from 'tools/shared/order'

function Payment({ dataSource, entity }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const data = detail[dataSource]

    if (data === undefined) return (null)

    const columns = [
        {
            label: "وضعیت پرداخت",
            text: data.status ? "تایید شده" : "در انتظار تایید"
        },
        {
            label: " کد رهگیری",
            text: data.bankResponse
        },
        {
            label: "تاریخ پرداخت",
            text: data.payDate
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default Payment