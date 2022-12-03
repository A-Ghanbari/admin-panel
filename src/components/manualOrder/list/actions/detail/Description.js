import Descriptions from 'components/utils/descriptions'
import { useSelector } from 'react-redux'

export default function Description({ dataSource, entity }) {
    const { data } = useSelector(
        (s) => s[entity.name]
    );

    if (data === undefined) return (null)

    const columns = [
        {
            label: "توضیحات",
            text: data.adminMessage
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}