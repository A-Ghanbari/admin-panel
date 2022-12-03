import Descriptions from 'components/utils/descriptions'
import { descriptionMultiCols } from 'tools/utils'

export default function Overview({ data }) {

    const newModel = data.model
    const oldModel = data.oldModel

    const columns = [
        {
            label: " کد کالا",
            new: newModel.ID,
            old: oldModel.ID,
        },
        {
            label: "نام کالا",
            new: newModel.productName,
            old: oldModel.productName,
        },
        {
            label: "نام لاتین",
            new: newModel.latinName,
            old: oldModel.latinName,
        },
        {
            label: "نام برند",
            new: newModel.brandName,
            old: oldModel.brandName,
        },
        {
            label: "نام گروه",
            new: newModel.categoryName,
            old: oldModel.categoryName,
        },
        {
            label: "ترتیب",
            new: newModel.sort,
            old: oldModel.sort,
        },
        {
            label: "پیوند یکتا",
            new: newModel.slug,
            old: oldModel.slug,
        },
        {
            label: "فعال",
            new: newModel.isInactive ? "خیر" : "بلی",
            old: oldModel.isInactive ? "خیر" : "بلی",
        },
        {
            label: "وزن",
            new: newModel.weight,
            old: oldModel.weight,
        },
        {
            label: "طول",
            new: newModel.length,
            old: oldModel.length,
        },
        {
            label: "عرض",
            new: newModel.width,
            old: oldModel.width,
        },
        {
            label: "ارتفاع",
            new: newModel.heigth,
            old: oldModel.heigth,
        },
        {
            label: "شماره مجوز",
            new: newModel.licenseNumber,
            old: oldModel.licenseNumber,
        },
    ]

    return (
        <div className='product-log height-scroll'>
            <Descriptions data={descriptionMultiCols(columns)} />
        </div>
    )
}
