import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { TICKET_TYPE as entity } from "tools/utils/entities"
import { getTicketsTypes, createTicketsCategory } from "store/actions/ticket"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { FormTextArea } from "components/utils/form/items/FormTextArea"
import { ColumnGrid, Row } from "components/utils/grid"
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

    const ticketType = [{ text: "بدون بالا سری", value: " " }]
    for (const item of dataList) {
        ticketType.push({
            text: item.titleName,
            value: item.ID
        })
    }

    const sort = []
    for (let i = 1; i < 11; i++) {
        sort.push({
            text: i,
            value: i
        })
    }
    const initialValues = {
        parentID: " ",
        isActive: true,
        hasValue: false,
        sort: 1
    }
    const onFinish = (values) => {
        createTicketsCategory(values)
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
                        <FormInput
                            name="titleName"
                            label="عنوان"
                            required={true}
                        />
                        <FormSelectSearch
                            name="parentID"
                            label="نام تیکت بالاسری"
                            items={ticketType}
                        />
                        <FormSelect
                            name="isActive"
                            label="وضعیت"
                            items={[
                                {
                                    text: "فعال",
                                    value: true,
                                },
                                {
                                    text: "غیر فعال",
                                    value: false,
                                },
                            ]}
                        />
                        <FormSelect
                            name="hasValue"
                            label="دریافت اطلاعات"
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
                        <FormSelect
                            name="sort"
                            label="ترتیب"
                            items={sort}
                        />
                    </ColumnGrid>
                    <FormTextArea
                        name="description"
                        label="توضیحات"
                    />
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}
