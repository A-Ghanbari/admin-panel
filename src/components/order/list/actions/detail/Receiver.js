import Descriptions from 'components/utils/descriptions'
import { useSelector } from 'react-redux'
import { detail } from 'tools/shared/order'

function Receiver({ dataSource, entity }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const data = detail[dataSource]

    if (data === undefined) return (null)

    const columns = [
        {
            label: "نام",
            text: data.name
        },
        {
            label: "استان",
            text: data.receiverProvince
        },
        {
            label: "شهر",
            text: data.receiverCity
        },
        {
            label: "آدرس",
            text: data.receiverAddress
        },
        {
            label: "کد پستی",
            text: data.receiverPostalCode
        },
        {
            label: "تلفن",
            text: data.receiverPhone
        },
        {
            label: "موبایل",
            text: data.mobile
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default Receiver