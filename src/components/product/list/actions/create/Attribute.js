import { useSelector } from "react-redux"
import { GROUP_ATTRIBUTE as entity } from "tools/utils/entities"
import Descriptions from "components/utils/descriptions"
import AttributeMaker from "components/utils/atrributeMaker"

export default function Attribute() {

    const { dataList } = useSelector(
        s => s[entity.pluralizeName]
    )

    const columns = []
    dataList.map(item => (
        columns.push(
            {
                label: item.title,
                text: <AttributeMaker type={item.selectType} item={item} />
            }
        )
    ))

    return (
        <>
            <h1>ویژگی ها</h1>
            <div className="height-scroll">
                <Descriptions data={columns} />
            </div>
        </>
    )
}
