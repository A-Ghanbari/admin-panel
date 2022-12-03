import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { TICKET_TYPE as entity } from "tools/utils/entities"
import { getTicketsTypes, createTicketsTemplate } from "store/actions/ticket"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
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

    const ticketType = [{ text: "پاسخ عمومی", value: " " }]
    for (const item of dataList) {
        ticketType.push({
            text: item.titleName,
            value: item.ID
        })
    }

    const initialValues = {
        ticketTypeID: " ",
    }
    const onFinish = (values) => {
        createTicketsTemplate(values)
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
                            name="title"
                            label="عنوان"
                            required={true}
                        />
                        <FormSelectSearch
                            name="ticketTypeID"
                            label="نوع تیکت"
                            items={ticketType}
                        />
                    </ColumnGrid>
                    <FormTextArea
                        name="description"
                        label="توضیحات"
                        required={true}
                    />
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}
