import { useState } from "react"
import API_SERVICES from "tools/shared/apis"
import { exportTableExcelFile } from "store/actions/export"
import { checkFilters } from "tools/utils"
import FormInput from "components/utils/form/items/FormInput"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormSelect from "components/utils/form/items/FormSelect"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish, }) {
    const [field, setFields] = useState(initialValues)
    const [loading, setLoading] = useState(false)

    const onValuesChange = (changedValues, allValues) => {
        setFields(allValues)
    }

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues} onValuesChange={onValuesChange}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="productID"
                            label="کد محصول"
                        />
                        <FormInput
                            name="productName"
                            label="نام محصول"
                        />
                        <FormDatePicker
                            name="dateFrom"
                            label="تاریخ از "
                        />
                        <FormDatePicker
                            name="dateTo"
                            label="تاریخ تا "
                        />
                        <FormSelect
                            name="changeType"
                            label="نوع"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                }, {
                                    text: "خرید",
                                    value: 1,
                                }, {
                                    text: "شارژ",
                                    value: 2,
                                }
                            ]}
                        />
                        <FormSelect
                            name="warehouseType"
                            label="انبار"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                }, {
                                    text: "سایت",
                                    value: 1,
                                }, {
                                    text: "خدمات",
                                    value: 2,
                                }, {
                                    text: "ضایعات",
                                    value: 3,
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
                            permission="excelExportProductLog"
                            onClick={() => exportTableExcelFile({
                                url: API_SERVICES.product.log.excel,
                                fileName: 'product-log-file',
                                data: checkFilters(field),
                                loading: setLoading
                            })}
                        />
                    </ActionButton>
                </Row>
            </Form>
        </Collapse>)
}
