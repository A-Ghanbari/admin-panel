import Descriptions from 'components/utils/descriptions'
import { useSelector } from 'react-redux'
import { addCommaToNumber } from 'tools/utils'

function Overview({ dataSource, entity }) {
    const { data } = useSelector(
        (s) => s[entity.name]
    );

    const detail = data[dataSource]

    if (detail === undefined) return (null)

    const columns = [
        {
            label: "شناسه پرداخت",
            text: detail.transactionID
        },
        {
            label: " کد سفارش",
            text: detail.orderID
        },
        {
            label: "جمع کل ",
            text: `${addCommaToNumber(Math.floor(detail.totalPrice / 10))} تومان`
        },
        {
            label: "تخفیف کل ",
            text: `${addCommaToNumber(Math.floor(detail.totalDiscount / 10))} تومان`
        },
        {
            label: "هزینه پست ",
            text: `${addCommaToNumber(Math.floor(detail.postCost / 10))} تومان`
        },
        {
            label: "مالیات ",
            text: `${addCommaToNumber(Math.floor(detail.totalTax / 10))} تومان`
        },
        {
            label: "پرداخت شده ",
            text: `${addCommaToNumber(Math.floor(detail.totalPay / 10))} تومان`
        },
        {
            label: "وزن بسته ",
            text: `${detail.totalWeight} گرم`
        },
        {
            label: "جمع پرداختی کیف پول ",
            text: `${addCommaToNumber(Math.floor(detail.totalWalletPay / 10))} تومان`
        },
        {
            label: "جمع پرداختی درگاه بانکی ",
            text: `${addCommaToNumber(Math.floor(detail.totalBankPay / 10))} تومان`
        },
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default Overview