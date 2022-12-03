import Descriptions from 'components/utils/descriptions'
import { descriptionMultiCols } from 'tools/utils'

export default function Warehouse({ data }) {

    const newModel = data.model
    const oldModel = data.oldModel

    const columns = [
        {
            label: "انبار خدمات",
            new: newModel.ServiceGarrantyOption?.minimumServiceGarrantyCurrentCount,
            old: oldModel.ServiceGarrantyOption?.minimumServiceGarrantyCurrentCount,
        },
        {
            label: "انبار سایت",
            new: newModel.ServiceGarrantyOption?.minimumProductCount,
            old: oldModel.ServiceGarrantyOption?.minimumProductCount,
        },
        {
            label: "لحظه ای انبار خدمات",
            new: newModel.ServiceGarrantyOption?.serviceGarrantyPercent,
            old: oldModel.ServiceGarrantyOption?.serviceGarrantyPercent,
        },
        {
            label: "حداقل شارژ انبار خدمات",
            new: newModel.ServiceGarrantyOption?.minimumServiceGarrantyChargeCount,
            old: oldModel.ServiceGarrantyOption?.minimumServiceGarrantyChargeCount,
        },
        {
            label: "حداکثر شارژ انبار خدمات",
            new: newModel.ServiceGarrantyOption?.maximumServiceGarrantyChargeCount,
            old: oldModel.ServiceGarrantyOption?.maximumServiceGarrantyChargeCount,
        },
        {
            label: "بارکد اول",
            new: newModel.barcodes[0],
            old: oldModel.barcodes[0],
        },
        {
            label: "بارکد دوم",
            new: newModel.barcodes[1],
            old: oldModel.barcodes[1],
        },
    ]

    return (
        <div className='product-log height-scroll'>
            <Descriptions data={descriptionMultiCols(columns)} />
        </div>
    )
}
