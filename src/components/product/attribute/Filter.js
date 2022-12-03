import { useSelector } from "react-redux"
import { sortList } from "tools/utils"
import { GROUP_LIST as groupListEntity } from "tools/utils/entities"
import FormSelect from "components/utils/form/items/FormSelect"
import FormInput from "components/utils/form/items/FormInput"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish, }) {

    const { dataList: groupList } = useSelector(
        (s) => s[groupListEntity.pluralizeName]
    )

    const groups = [{ text: "همه", value: " " }]

    for (const item of sortList(groupList)) {
        groups.push({
            text: item.name,
            value: item.ID
        })
    }

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="title"
                            label="عنوان"
                        />
                        <FormInput
                            name="parentID"
                            label="کد ویژگی بالاسری"
                        />
                        <FormSelectSearch
                            name="categoryID"
                            label="گروه"
                            items={groups}
                        />
                        <FormSelect
                            name="isActive"
                            label="فعال"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                }, {
                                    text: "بلی",
                                    value: true,
                                }, {
                                    text: "خیر",
                                    value: false,
                                }
                            ]}
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>)
}
