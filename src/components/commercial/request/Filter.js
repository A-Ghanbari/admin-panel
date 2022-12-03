import { useSelector } from "react-redux"
import {
    BRAND_LIST as brandListEntity,
} from "tools/utils/entities"
import { sortList } from "tools/utils"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import FormSelect from "components/utils/form/items/FormSelect"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({
    initialValues,
    onFinish,
}) {

    const { dataList: brandList } = useSelector(
        (s) => s[brandListEntity.pluralizeName]
    )

    const brands = [{ text: "همه", value: " " }]

    for (const item of sortList(brandList)) {
        brands.push({
            text: item.name,
            value: item.ID
        })
    }

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormSelectSearch
                            name="SupplierWarehouseID"
                            label="انبار"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                            ]}
                        />
                        <FormSelect
                            name="supplierID"
                            label="تامین کننده"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                            ]}
                        />
                        <FormSelectSearch
                            name="brand"
                            label="برند"
                            items={brands}
                        />
                        <FormSelect
                            name="ClearingPriceType"
                            label="نوع پرداخت"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "نقدی",
                                    value: 1,
                                },
                                {
                                    text: "غیر نقدی",
                                    value: 2,
                                },
                                {
                                    text: "امانی",
                                    value: 3,
                                },
                                {
                                    text: "هدیه",
                                    value: 4,
                                }
                            ]}
                        />
                        <FormSelect
                            name="Status"
                            label="فعال"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "در حال بررسی",
                                    value: 1,
                                },
                                {
                                    text: "تایید شده",
                                    value: 2,
                                },
                                {
                                    text: "تایید نشده",
                                    value: 3,
                                }
                            ]}
                        />
                        <FormDatePicker
                            name="createdDateFrom"
                            label="تاریخ از"
                        />
                        <FormDatePicker
                            name="createdDateTo"
                            label="تاریخ تا"
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>
    )
}
