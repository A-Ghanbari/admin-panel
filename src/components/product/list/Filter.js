import { useState } from "react"
import { useSelector } from "react-redux"
import {
    BRAND_LIST as brandListEntity,
    GROUP_LIST as groupListEntity,
} from "tools/utils/entities"
import { exportTableExcelFile } from "store/actions/export"
import { checkFilters, sortList } from "tools/utils"
import API_SERVICES from "tools/shared/apis"
import FormSelect from "components/utils/form/items/FormSelect"
import FormInput from "components/utils/form/items/FormInput"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish, setFilterData }) {
    const [field, setFields] = useState(initialValues)
    const [loading, setLoading] = useState(false)

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

    const onValuesChange = (changedValues, allValues) => {
        setFields(allValues)
        setFilterData(allValues)
    }

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues} onValuesChange={onValuesChange}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="ID"
                            label="کد محصول"
                        />
                        <FormInput
                            name="barcode"
                            label="بارکد محصول"
                        />
                        <FormInput
                            name="productName"
                            label="نام محصول"
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
                    <ActionButton position="center">
                        <Button name="submit" label="جستجو" htmlType="submit" />
                        <Button
                            name="excel"
                            label="خروجی اکسل"
                            type="primary-dark"
                            loading={loading}
                            onClick={() => exportTableExcelFile({
                                url: API_SERVICES.product.list.excel,
                                fileName: 'product-list',
                                data: checkFilters(field),
                                loading: setLoading
                            })}
                        />
                    </ActionButton>
                </Row>
            </Form>
        </Collapse>)
}
