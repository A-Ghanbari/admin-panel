import Descriptions from 'components/utils/descriptions'
import { useSelector } from 'react-redux'

function Receiver({ dataSource, entity }) {
    const { data } = useSelector(
        (s) => s[entity.name]
    );

    const detail = data[dataSource]

    if (detail === undefined) return (null)

    const columns = [
        {
            label: "نام",
            text: detail.name
        },
        {
            label: "استان",
            text: detail.receiverProvince
        },
        {
            label: "شهر",
            text: detail.receiverCity
        },
        {
            label: "آدرس",
            text: detail.receiverAddress
        },
        {
            label: "کد پستی",
            text: detail.receiverPostalCode
        },
        {
            label: "تلفن",
            text: detail.receiverPhone
        },
        {
            label: "موبایل",
            text: detail.mobile
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default Receiver