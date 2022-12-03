import { useSelector } from "react-redux"
import {
    BRAND_LIST as brandListEntity,
    GROUP_LIST as groupListEntity,
} from "tools/utils/entities"
import { sortList } from "tools/utils"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import FormSelect from "components/utils/form/items/FormSelect"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import FormInput from "components/utils/form/items/FormInput"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({
    initialValues,
    onFinish,
}) {

    const { dataList: brandList } = useSelector(
        (s) => s[brandListEntity.pluralizeName]
    )
    const { dataList: groupList } = useSelector(
        (s) => s[groupListEntity.pluralizeName]
    )

    const brands = [{ text: "همه", value: " " }]
    const groups = [{ text: "همه", value: " " }]

    for (const item of sortList(brandList)) {
        brands.push({
            text: item.name,
            value: item.ID
        })
    }

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
                            name="ProductID"
                            label="کد کالا"
                        />
                        <FormInput
                            name="requestID"
                            label="شماره حواله"
                        />
                        <FormDatePicker
                            name="createdDateFrom"
                            label="تاریخ از"
                        />
                        <FormDatePicker
                            name="createdDateTo"
                            label="تاریخ تا"
                        />
                        <FormInput
                            name="ID"
                            label="کد کالا"
                        />
                        <FormSelectSearch
                            name="brandID"
                            label="برند"
                            items={brands}
                        />
                        <FormSelectSearch
                            name="categoryID"
                            label="گروه"
                            items={groups}
                        />
                        <FormSelect
                            name="isActive"
                            label="وضعیت کالا"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                }, {
                                    text: "فعال",
                                    value: true,
                                }, {
                                    text: "غیر فعال",
                                    value: false,
                                }
                            ]}
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>
    )
}
