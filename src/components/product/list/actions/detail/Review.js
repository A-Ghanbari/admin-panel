import { formatQuillValue } from 'tools/utils'
import Descriptions from 'components/utils/descriptions'

function Rewiew({ data }) {

    const columns = [
        {
            label: "توضیح مختصر",
            text: data.description
        },
        {
            label: " توضیح کامل",
            text: <span dangerouslySetInnerHTML={{ __html: formatQuillValue(data.moreDescription) }} />
        },
        {
            label: "موارد استفاده ",
            text: data.uses
        },
        {
            label: "مزایا ",
            text: data.productsAdvantages
        },
        {
            label: "معایب ",
            text: data.productsDisAdvantages
        },
        {
            label: "روش استفاده ",
            text: data.howToUse
        },
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default Rewiew