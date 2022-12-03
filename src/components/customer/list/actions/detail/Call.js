import ACL from 'components/ACL';
import Descriptions from 'components/utils/descriptions'
import { useSelector } from 'react-redux'

function Call({ dataSource, entity }) {
    const { data } = useSelector(
        (s) => s[entity.name]
    );

    const detail = data[dataSource]

    if (detail === undefined) return (null)

    const columns = [
        {
            label: "همراه",
            text: detail.cell
        }, {
            label: "ثابت",
            text: detail.phone
        }, {
            label: "ایمیل",
            text: detail.email
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default ACL(Call)