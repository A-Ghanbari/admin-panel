import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { TICKET_TYPE as entity } from "tools/utils/entities"
import { getTicketsTypes } from "store/actions/ticket"
import Form from "components/utils/form"
import FormSelect from "components/utils/form/items/FormSelect"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { FormTextArea } from "components/utils/form/items/FormTextArea"
import { ColumnGrid, Row } from "components/utils/grid"
import { FormDatePicker } from "components/utils/form/items/FormDatePicker"
import { checkFilters } from "tools/utils"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const { dataList } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getTicketsTypes()
    }, [])

    const ticketType = [{ text: "همه", value: " " }]
    for (const item of dataList) {
        ticketType.push({
            text: item.titleName,
            value: item.ID
        })
    }

    const initialValues = {
        TypeID: " ",
        IsActive: true,
    }
    const onFinish = (values) => {
        console.log(checkFilters(values))
        navigate(-1)
    }

    return (
        <div className="form-card">
            <Form
                onFinish={onFinish}
                initialValues={initialValues}
            >
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormDatePicker
                            name="EndDateTime"
                            label="تاریخ بستن"
                            required={true}
                        />
                        <FormDatePicker
                            name="StartDateTime"
                            label="تاریخ باز کردن"
                            required={true}
                        />
                    </ColumnGrid>
                    <FormTextArea
                        name="Message"
                        label="پیام"
                        required={true}
                    />
                    <ColumnGrid col={fieldCol}>
                        <FormSelect
                            name="IsActive"
                            label="فعال "
                            required={true}
                            items={[
                                {
                                    text: "بلی",
                                    value: true,
                                },
                                {
                                    text: "خیر",
                                    value: false,
                                },
                            ]}
                        />
                        <FormSelectSearch
                            name="TypeID"
                            label="دسترسی"
                            required={true}
                            items={ticketType}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}
