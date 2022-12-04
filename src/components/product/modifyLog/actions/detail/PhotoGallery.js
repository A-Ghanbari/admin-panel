import Descriptions from 'components/utils/descriptions'
import { descriptionMultiCols } from 'tools/utils'

export default function PhotoGallery({ data }) {

    const newPicLink = data.model.picLink
    const newModel = data.model.mediaFiles
    const oldModel = data.oldModel.mediaFiles

    const columns = [{
        label: "تصویر",
        new: newPicLink,
        old: oldModel[0] ? oldModel[0].FilePath : 'https://panel.test.com/images/no-image.jpg',
        type: "album"
    }]
    newModel?.map((image, index) => (
        columns.push({
            label: "تصویر",
            new: image.FilePath,
            old: oldModel[index + 1] ? oldModel[index + 1].FilePath : 'https://panel.test.com/images/no-image.jpg',
            type: "album"
        })
    ))

    return (
        <div className='product-log height-scroll'>
            <Descriptions data={descriptionMultiCols(columns)} />
        </div>
    )
}
