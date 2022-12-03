import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getGroupAttribute } from "store/actions/product"
import { GROUP_ATTRIBUTE as entity } from "tools/utils/entities"
import { setInitialAttributes } from "tools/utils"
import Descriptions from "components/utils/descriptions"
import AttributeMaker from "components/utils/atrributeMaker"
import Form from "components/utils/form"

export default function Attribute({ data }) {

    useEffect(() => {
        getGroupAttribute({ ID: data.categoryID })
    }, [])

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
                <Form initialValues={setInitialAttributes(data.attributes)}>
                    <Descriptions data={columns} />
                </Form>
            </div>
        </>
    )
}
