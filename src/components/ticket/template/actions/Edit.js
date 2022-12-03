import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { TICKET_TEMPLATE as entity, TICKET_TYPE as ticketTypeEntity } from "tools/utils/entities"
import { editTicketsTemplate, getTicketsTemplate, getTicketsTypes } from "store/actions/ticket"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { FormTextArea } from "components/utils/form/items/FormTextArea"
import { ColumnGrid, Row } from "components/utils/grid"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit() {
    const navigate = useNavigate()
    const { ID } = useParams()

    const { dataList: ticketTypeList } = useSelector(
        (s) => s[ticketTypeEntity.pluralizeName]
    )

    const { dataList } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getTicketsTypes()
        getTicketsTemplate({ ID: ID })
    }, [])

    const ticketType = []
    for (const item of ticketTypeList) {
        ticketType.push({
            text: item.titleName,
            value: item.ID
        })
    }

    const onFinish = (values) => {
        editTicketsTemplate(
            {
                ID,
                ...values
            }
        )
        navigate(-1)
    }

    return (
        <div className="form-card">
            <Form
                onFinish={onFinish}
                initialValues={{ ...dataList[0], ticketTypeID: dataList[0].ticketType }}
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
                        label="توضیح مختصر"
                    />
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div >
    )
}
