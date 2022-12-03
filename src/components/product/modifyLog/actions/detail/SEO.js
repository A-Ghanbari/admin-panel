import Descriptions from 'components/utils/descriptions'
import { descriptionMultiCols } from 'tools/utils'

export default function SEO({ data }) {

    const newModel = data.model
    const oldModel = data.oldModel

    const columns = [
        {
            label: "عنوان صفحه",
            new: newModel.pageTitle,
            old: oldModel.pageTitle,
        },
        {
            label: "توضیح صفحه",
            new: newModel.pageDescription,
            old: oldModel.pageDescription,
        },
        {
            label: "کلمات کلیدی",
            new: newModel.pageKeyword,
            old: oldModel.pageKeyword,
        },
    ]

    return (
        <div className='product-log height-scroll'>
            <Descriptions data={descriptionMultiCols(columns)} />
        </div>
    )
}
