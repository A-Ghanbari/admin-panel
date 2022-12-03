import { isEmpty } from 'lodash'
import Descriptions from 'components/utils/descriptions'

export default function Overview({ data }) {

    if (isEmpty(data)) {
        return null
    }

    const columns = [
        {
            label: "عنوان",
            text: data.title
        },
        {
            label: " کد تخفیف",
            text: data.discountCode
        },
        {
            label: "نوع ",
            text: data.discountTypeName
        },
        {
            label: "حداکثر تعداد کاربر",
            text: data.maxUsedPerUser
        },
        {
            label: "حداکثر تعداد سفارش کاربر",
            text: data.maxUsedPerOrder
        },
        {
            label: "تاریخ شروع",
            text: data.startDateTime
        },
        {
            label: "تاریخ پایان",
            text: data.endDateTime
        },
        {
            label: "درصدی",
            text: data.isPercent ? "بلی" : "خیر"
        },
        {
            label: "مقدار درصد",
            text: data.discount
        },
        {
            label: "سقف قیمت",
            text: data.maxPrice
        },
        {
            label: "وضعیت",
            text: data.statusName
        },
        {
            label: "سازنده",
            text: data.userCreated
        },
        {
            label: "تاریخ ایجاد",
            text: data.createdDateTime
        },
    ]

    return (
        <Descriptions data={columns} />
    )
}
