import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { TICKET_TYPE as typeEntity, TICKET_MESSAGE as messageEntity } from "tools/utils/entities"
import {
    getCustomerTicketsMessages,
    getTicketsTypes, responseForTicket,
    ticketChangeStatus,
    ticketChangeTicketType
} from "store/actions/ticket"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import FormEditor from "components/utils/form/items/FormEditor"
import Form from "components/utils/form"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { ColumnGrid } from "components/utils/grid"
import Messages from "components/ticket/list/actions/Messages"
import Skeleton from "components/utils/skeleton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Conversation() {
    // const [value, setValue] = useState("")
    const { ID } = useParams()
    let navigate = useNavigate()

    // useEffect(() => {
    //     getTicketsTypes()
    //     getCustomerTicketsMessages({ ticketID: ID })
    // }, [value])

    // const { dataList } = useSelector(
    //     (s) => s[typeEntity.pluralizeName]
    // )

    // const { data, loading } = useSelector(
    //     (s) => s[messageEntity.name]
    // )

    // const ticketType = []
    // for (const item of dataList) {
    //     ticketType.push({
    //         text: item.titleName,
    //         value: item.ID
    //     })
    // }

    // const onFinish = (values) => {
    //     responseForTicket({
    //         ticketID: ID,
    //         ...values,
    //         TicketFiles: [],
    //         title: "Title"
    //     });
    //     setValue(values)
    // }

    // const changeStatus = (changedValues) => {
    //     ticketChangeStatus({
    //         ticketID: ID,
    //         ...changedValues,
    //         typeID: data.typeID
    //     })
    // }

    // const changeTicketType = (changedValues) => {
    //     ticketChangeTicketType({
    //         ticketID: ID,
    //         ...changedValues
    //     })
    // }

    return (
        <div className="section-card">
            <h1>
                گفتگوی تیکت کد {ID}
            </h1>
            <ColumnGrid col={fieldCol}>
                <Form
                    // initialValues={data}
                    // onValuesChange={changeStatus}
                >
                    <FormSelectSearch
                        name="status"
                        label="وضعیت"
                        items={[
                            {
                                text: "در انتظار پاسخ",
                                value: 0,
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
                        ]}
                    />
                </Form>
                <Form
                    // initialValues={data}
                    // onValuesChange={changeTicketType}
                >
                    <FormSelectSearch
                        name="typeID"
                        label="نوع"
                        // items={ticketType}
                    />
                </Form>
            </ColumnGrid>
            {/* <Skeleton
                avatar
                active
                loading={loading}
            > */}
                <Messages />
            {/* </Skeleton> */}
            <Form
                // onFinish={onFinish}
                initialValues={{ content: " " }}
            >
                <FormEditor
                    name="content"
                    // media={false}
                />
                <ActionButton position="center">
                    <Button
                        htmlType="submit"
                        type="primary-dark"
                        label="ارسال پاسخ"
                    />
                    <Button
                        type="secondary-warning"
                        label="بازگشت"
                        onClick={() => navigate(-1)}
                    />
                </ActionButton>
            </Form>
        </div >
    )
}
