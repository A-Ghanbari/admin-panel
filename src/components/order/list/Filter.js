import { useState } from "react"
import { checkFilters, convertDate, convertDates } from "tools/utils"
import { exportTableExcelFile } from "store/actions/export"
import API_SERVICES from "tools/shared/apis"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormProvinceAndCity from "components/utils/form/items/FormProvinceAndCity"
import FormSelect from "components/utils/form/items/FormSelect"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({
    // initialValues,
    // onFinish,
    // province,
    // setProvince,
    // setDate,
}) {
    // const [field, setFields] = useState(initialValues)
    // const [loading, setLoading] = useState(false)

    // const onValuesChange = (changedValues, allValues) => {
    //     setFields(allValues)
    //     if (changedValues.dateFrom === allValues.dateFrom) setDate(s => ({ ...s, DateFrom: convertDate(allValues.dateFrom) }))
    //     if (changedValues.dateTo === allValues.dateTo) setDate(s => ({ ...s, DateTo: convertDate(allValues.dateTo) }))
    // }

    return (
        <Collapse title="فیلتر">
            <Form > 
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="financialFactorID"
                            label="شناسه مالی"
                        />
                        <FormInput
                            name="orderID"
                            label="شماره سفارش"
                        />
                        <FormInput
                            name="UserName"
                            label="نام کاربری"
                        />
                        <FormInput
                            name="ReagentCode"
                            label="کد معرف"
                        />
                        <FormInput
                            name="barcodeName"
                            label="بارکد"
                        />
                        <FormDatePicker
                            name="dateFrom"
                            label="تاریخ از"
                        />
                        <FormDatePicker
                            name="dateTo"
                            label="تاریخ تا"
                        />
                        {/* <FormProvinceAndCity
                            name="provinceAndCity"
                            label="استان و شهر"
                            defaultValues={Object.values(province)}
                            onChange={(selectedOptions) => {
                                setProvince({
                                    provinceID: selectedOptions[0],
                                    cityID: selectedOptions[1],
                                })
                            }}
                        /> */}
                        <FormSelect
                            name="orderStatus"
                            label="وضعیت سفارش"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "در انتظار تایید",
                                    value: 0,
                                },
                                {
                                    text: "تایید شده بانکی",
                                    value: 1,
                                },
                                {
                                    text: "تایید شده کیف پول",
                                    value: 2,
                                },
                                {
                                    text: "تایید شده",
                                    value: 3,
                                },
                            ]}
                        />
                        <FormSelect
                            name="transStatus"
                            label="وضعیت بارگیری"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "بارگیری‌نشده",
                                    value: 0,
                                },
                                {
                                    text: "خروج از انبار",
                                    value: 2,
                                },
                                {
                                    text: "در انتظار بارکدخوان",
                                    value: 1,
                                },
                            ]}
                        />
                        <FormSelect
                            name="postCompanyID"
                            label="پست"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "پست پیشتاز (اشتهارد)",
                                    value: "1",
                                },
                                {
                                    text: "MAHEX",
                                    value: "2",
                                },
                                {
                                    text: "نفیس اکسپرس",
                                    value: "3",
                                },
                            ]}
                        />
                    </ColumnGrid>
                    <ActionButton position="center">
                        <Button name="submit" label="جستجو" htmlType="submit" />
                        <Button
                            name="excel"
                            label="خروجی اکسل"
                            type="primary-dark"
                            // loading={loading}
                            // onClick={() => exportTableExcelFile({
                            //     url: API_SERVICES.order.ordersReport,
                            //     fileName: 'order-report-file',
                            //     data: checkFilters(field),
                            //     loading: setLoading
                            // })}
                        />
                    </ActionButton>
                </Row>
            </Form>
        </Collapse>
    )
}
