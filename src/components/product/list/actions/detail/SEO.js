import Descriptions from "components/utils/descriptions"

export default function SEO({ data }) {
    const columns = [
        {
            label: "عنوان صفحه",
            text: data.pageTitle
        },
        {
            label: " کلمات کلیدی",
            text: data.pageKeyword
        },
        {
            label: "توضیحات صفحه ",
            text: data.pageDescription
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}
