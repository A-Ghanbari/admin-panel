import Descriptions from "components/utils/descriptions"

function Warehouse({ data }) {

    const columns = [
        {
            label: "درصد شارژ انبار خدمات",
            text: data === null ? 0 : data.serviceGarrantyPercent
        },
        {
            label: "حداقل موجودی انبار خدمات ",
            text: data === null ? 0 : data.minimumProductCount
        },
        {
            label: "حداقل موجودی لحظه ای انبار خدمات ",
            text: data === null ? 0 : data.minimumServiceGarrantyCurrentCount
        },
        {
            label: "حداقل میزان شارژ انبار خدمات ",
            text: data === null ? 0 : data.minimumServiceGarrantyChargeCount
        },
        {
            label: "حداکثر میزان شارژ انبار خدمات ",
            text: data === null ? 0 : data.maximumServiceGarrantyChargeCount
        },
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default Warehouse