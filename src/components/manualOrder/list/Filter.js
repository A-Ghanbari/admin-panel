import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { MANUAL_ORDER_TYPE as entity } from "tools/utils/entities"
import { getManualOrderTypeList } from "store/actions/manualOrder"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import API_SERVICES from "tools/shared/apis"
import { exportTableExcelFile } from "store/actions/export"
import { checkFilters } from "tools/utils"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish, }) {
    const [loading, setLoading] = useState(false)
    const [field, setFields] = useState(initialValues)
    const { data } = useSelector(
        (s) => s[entity.name]
    )

    useEffect(() => {
        getManualOrderTypeList()
    }, [])

    const type = [{ text: "همه", value: "" }]

    for (const item of data) {
        type.push({
            text: item.title,
            value: item.ID
        })
    }

    const onValuesChange = (changedValues, allValues) => {
        setFields(allValues)
    }
    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues} onValuesChange={onValuesChange}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="manualOrderID"
                            label="شماره"
                        />
                        <FormInput
                            name="originalOrderID"
                            label="شماره سفارش اصلی"
                        />
                        <FormInput
                            name="ticketID"
                            label="شماره تیکت "
                        />
                        <FormInput
                            name="hph"
                            label="کد HPH"
                        />
                        <FormSelectSearch
                            name="TypeID"
                            label="نوع"
                            items={type}
                        />
                        <FormDatePicker
                            name="dateFrom"
                            label="تاریخ از"
                        />
                        <FormDatePicker
                            name="dateTo"
                            label="تاریخ تا"
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
                                    text: "در انتظار تایید نهایی",
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
                            loading={loading}
                            onClick={() => exportTableExcelFile({
                                url: API_SERVICES.manualOrder.getExcel,
                                fileName: 'manual-order-file',
                                data: checkFilters(field),
                                loading: setLoading
                            })}
                        />
                    </ActionButton>
                </Row>
            </Form>
        </Collapse>
    )
}
