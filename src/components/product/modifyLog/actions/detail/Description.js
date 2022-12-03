import Descriptions from 'components/utils/descriptions'
import { descriptionMultiCols } from 'tools/utils'

export default function Description({ data }) {

    const newModel = data.model
    const oldModel = data.oldModel

    const columns = [
        {
            label: "توضیح مختصر",
            new: newModel.description,
            old: oldModel.description,
        },
        {
            label: "توضیح کامل",
            new: newModel.moreDescription,
            old: oldModel.moreDescription,
        },
        {
            label: "موارد استفاده",
            new: newModel.uses,
            old: oldModel.uses,
        },
        {
            label: "روش استفاده",
            new: newModel.howToUse,
            old: oldModel.howToUse,
        },
        {
            label: "مزایا",
            new: newModel.productsAdvantages,
            old: oldModel.productsAdvantages,
        },
        {
            label: "معایب",
            new: newModel.productsDisAdvantages,
            old: oldModel.productsDisAdvantages,
        },
    ]

    return (
        <div className='product-log height-scroll' >
            <Descriptions data={descriptionMultiCols(columns)} />
        </div>
    )
}
