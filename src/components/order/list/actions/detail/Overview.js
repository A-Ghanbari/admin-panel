import Descriptions from 'components/utils/descriptions'
import { useSelector } from 'react-redux'
import { detail } from 'tools/shared/order';
import { addCommaToNumber } from 'tools/utils'

function Overview({ dataSource, entity }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const data = detail[dataSource]

    if (data === undefined) return (null)

    const columns = [
        {
            label: "شناسه پرداخت",
            text: data.transactionID
        },
        {
            label: " کد سفارش",
            text: data.orderID
        },
        {
            label: "جمع کل ",
            text: `${addCommaToNumber(Math.floor(data.totalPrice / 10))} تومان`
        },
        {
            label: "تخفیف کل ",
            text: `${addCommaToNumber(Math.floor(data.totalDiscount / 10))} تومان`
        },
        {
            label: "هزینه پست ",
            text: `${addCommaToNumber(Math.floor(data.postCost / 10))} تومان`
        },
        {
            label: "مالیات ",
            text: `${addCommaToNumber(Math.floor(data.totalTax / 10))} تومان`
        },
        {
            label: "پرداخت شده ",
            text: `${addCommaToNumber(Math.floor(data.totalPay / 10))} تومان`
        },
        {
            label: "وزن بسته ",
            text: `${data.totalWeight} گرم`
        },
        {
            label: "جمع پرداختی کیف پول ",
            text: `${addCommaToNumber(Math.floor(data.totalWalletPay / 10))} تومان`
        },
        {
            label: "جمع پرداختی درگاه بانکی ",
            text: `${addCommaToNumber(Math.floor(data.totalBankPay / 10))} تومان`
        },
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default Overview