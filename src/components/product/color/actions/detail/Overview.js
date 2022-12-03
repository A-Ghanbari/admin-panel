import Descriptions from 'components/utils/descriptions'

export default function Overview({ data }) {

    const columns = [
        {
            label: "عنوان",
            text: data?.title
        },
        {
            label: " تعداد کالا",
            text: data?.productCount
        },
        {
            label: " کد رنگ",
            text: data?.colorCode
        },

    ]

    return (
        <Descriptions data={columns} />
    )
}
