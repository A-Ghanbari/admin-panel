import { useEffect } from "react"
import { useSelector } from "react-redux"
import { TICKET_OPERATOR as operatorEntity, TICKET_TYPE as typeEntity } from "tools/utils/entities"
import { getTicketsOperators, getTicketsTypes } from "store/actions/ticket"
import FormSelect from "components/utils/form/items/FormSelect"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish, }) {

    const { data } = useSelector(
        (s) => s[operatorEntity.name]
    )

    const { dataList } = useSelector(
        (s) => s[typeEntity.pluralizeName]
    )

    useEffect(() => {
        getTicketsOperators()
        getTicketsTypes()
    }, [])

    const operatorType = [{ text: "همه", value: " " }]
    for (const item of data) {
        operatorType.push({
            text: item.fullName,
            value: item.userID
        })
    }

    const ticketType = [{ text: "همه", value: " " }]
    for (const item of dataList) {
        ticketType.push({
            text: item.titleName,
            value: item.ID
        })
    }

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="ticketID"
                            label="کد تیکت "
                        />
                        <FormInput
                            name="userName"
                            label="نام کاربری"
                        />
                        <FormSelectSearch
                            name="typeID"
                            label="نوع"
                            items={ticketType}
                        />
                        <FormSelect
                            name="userAdminID"
                            label="اپراتور"
                            items={operatorType}
                        />
                        <FormSelect
                            name="status"
                            label="وضعیت"
                            items={[
                                {
                                    text: "همه",
                                    value: " ",
                                },
                                {
                                    text: "در انتظار پاسخ",
                                    value: "0",
                                },
                                {
                                    text: "در حال بررسی",
                                    value: 1,
                                },
                                {
                                    text: "پاسخ داده شده",
                                    value: 2,
                                },
                                {
                                    text: "بسته شده",
                                    value: 3,
                                },
                                {
                                    text: "در حال بررسی بخش مالی",
                                    value: 4,
                                },
                                {
                                    text: "در حال بررسی بخش انبار مرکزی",
                                    value: 5,
                                },
                                {
                                    text: "در حال بررسی بخش انبار لجستیک",
                                    value: 6,
                                },
                                {
                                    text: "در حال بررسی تولید ",
                                    value: 7,
                                },
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
        </Collapse>)
}
