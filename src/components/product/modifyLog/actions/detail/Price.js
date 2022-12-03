import Descriptions from 'components/utils/descriptions'
import { descriptionMultiCols } from 'tools/utils'

export default function Price({ data }) {

    const newModel = data.model.salePrices
    const oldModel = data.oldModel.salePrices

    const columns = []
    newModel?.map((price, index) => (
        columns.push({
            label: "قیمت",
            new: price.salePrice,
            old: oldModel[index] ? oldModel[index].salePrice : 0,
        })
    ))

    return (
        <div className='product-log height-scroll'>
            <Descriptions data={descriptionMultiCols(columns)} />
        </div>
    )
}
