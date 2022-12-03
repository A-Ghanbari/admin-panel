import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { TICKET_CATEGORY as entity, TICKET_TYPE as ticketTypeEntity } from "tools/utils/entities"
import { formatQuillValue } from "tools/utils"
import { editTicketsCategory, getTicketsCategory, getTicketsTypes } from "store/actions/ticket"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
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
        getTicketsCategory({ typeID: ID })
    }, [])

    const ticketType = [{ text: "بدون بالا سری", value: null }]
    for (const item of ticketTypeList) {
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

    const onFinish = (values) => {
        editTicketsCategory(
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
                initialValues={{ ...dataList[0], description: formatQuillValue(dataList[0].description) }}
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
