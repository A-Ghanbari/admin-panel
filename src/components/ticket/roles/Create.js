import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { TICKET_OPERATOR as operatorEntity, TICKET_TYPE as ticketTypeEntity } from "tools/utils/entities"
import { getTicketsTypes, getTicketsOperators, createTicketsRoles } from "store/actions/ticket"
import Form from "components/utils/form"
import FormSelect from "components/utils/form/items/FormSelect"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { ColumnGrid, Row } from "components/utils/grid"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const { dataList: ticketTypeList } = useSelector(
        (s) => s[ticketTypeEntity.pluralizeName]
    )
    const { data: operatorsList } = useSelector(
        (s) => s[operatorEntity.name]
    )
    useEffect(() => {
        getTicketsTypes()
        getTicketsOperators()
    }, [])

    const ticketType = []
    for (const item of ticketTypeList) {
        ticketType.push({
            text: item.titleName,
            value: item.ID
        })
    }

    const operatorType = []
    for (const item of operatorsList) {
        operatorType.push({
            text: item.fullName,
            value: item.userID
        })
    }

    const onFinish = (values) => {
        createTicketsRoles(values)
        navigate(-1)
    }

    return (
        <div className="form-card">
            <Form
                onFinish={onFinish}
            >
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormSelectSearch
                            name="ticketTypeID"
                            label="دسترسی"
                            required={true}
                            items={ticketType}
                        />
                        <FormSelect
                            name="userID"
                            label="اپراتور"
                            required={true}
                            items={operatorType}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}
