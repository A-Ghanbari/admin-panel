import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import FormInput from "components/utils/form/items/FormInput"
import FormProvinceAndCity from "components/utils/form/items/FormProvinceAndCity"
import FormSelect from "components/utils/form/items/FormSelect"
import FormDatePicker from "components/utils/form/items/FormDatePicker"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({
    initialValues,
    onFinish,
    province,
    setProvince,
}) {

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="ID"
                            label="کد تامین کننده"
                        />
                        <FormInput
                            name="NationalCode"
                            label="کد ملی"
                        />
                        <FormProvinceAndCity
                            name="provinceAndCity"
                            label="استان و شهر"
                            defaultValues={Object.values(province)}
                            onChange={(selectedOptions) => {
                                setProvince({
                                    provinceID: selectedOptions[0],
                                    cityID: selectedOptions[1],
                                })
                            }}
                        />
                        <FormSelect
                            name="SupplierType"
                            label="نوع تامین کننده"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "حقیقی",
                                    value: 1,
                                },
                                {
                                    text: "حقوقی",
                                    value: 2,
                                }
                            ]}
                        />
                        <FormDatePicker
                            name="dateFrom"
                            label="تاریخ از"
                        />
                        <FormDatePicker
                            name="dateTo"
                            label="تاریخ تا"
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>
    )
}
