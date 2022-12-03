import Descriptions from 'components/utils/descriptions'
import { PACKING_ORDER as entity } from "tools/utils/entities"
import { useSelector } from 'react-redux'
import { addCommaToNumber } from 'tools/utils'
import { isEmpty } from 'lodash'

export default function Overview() {
    const { data } = useSelector(
        (s) => s[entity.name]
    )

    if (isEmpty(data)) return (null)

    const detail = data.dataList[0].orderItems

    const columns = [
        {
            label: "نام",
            text: detail.receiverFirstName + " " + detail.receiverLastName
        }, {
            label: "کد ملی",
            text: detail.nationalCode
        }, {
            label: "شماره همراه",
            text: detail.receiverMobile
        }, {
            label: "کد پستی",
            text: detail.receiverPostalCode
        }, {
            label: "آدرس",
            text: detail.receiverAddress
        }, {
            label: "مبلغ کل",
            text: `${addCommaToNumber(Math.floor(detail.productsPrice / 10))} تومان`
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}