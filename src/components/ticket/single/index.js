import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createSingleTicket, getTicketsCategory } from 'store/actions/ticket'
import { TICKET_CATEGORY as entity } from "tools/utils/entities"
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import { ColumnGrid } from 'components/utils/grid'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import FormCascader from 'components/utils/form/items/FormCascader'
import FormEditor from 'components/utils/form/items/FormEditor'
import FormUpload from 'components/utils/form/items/FormUpload'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Single() {

    // useEffect(() => {
    //     getTicketsCategory()
    // }, [])

    // const { dataList } = useSelector(
    //     (s) => s[entity.pluralizeName]
    // )

    // const getTicketTypes = () => {
    //     let ticketType = [{ label: "انتخاب کنید", value: " " }]
    //     for (const item of dataList) {
    //         if (!item.parentID) {
    //             let type = {
    //                 label: item.titleName,
    //                 value: item.ID,
    //                 children: []
    //             }
    //             for (const child of dataList) {
    //                 if (child.parentID !== null) {
    //                     if (child.parentID === type.value) {
    //                         type.children.push({
    //                             label: child.titleName,
    //                             value: child.ID
    //                         })
    //                     }
    //                 }
    //             }
    //             ticketType.push(type)
    //         }
    //     }
    //     return ticketType
    // }

    // const onFinish = (values) => {
    //     let ticketFiles = []
    //     if (values.ticketFiles) {
    //         for (const img of values.ticketFiles) {
    //             ticketFiles.push({
    //                 fileAddress: img.response.path
    //             })
    //         }
    //     }
    //     createSingleTicket({
    //         ...values,
    //         typeID: values.typeID[values.typeID.length - 1],
    //         ticketFiles: ticketFiles
    //     })
    // }

    return (
        <div className="form-card">
            <Form
                // onFinish={onFinish}
                initialValues={{ typeID: " " }}
            >
                <ColumnGrid col={fieldCol}>
                    <FormInput
                        name="customerUsername"
                        label="نام کاربری"
                        required={true}
                    />
                    <FormCascader
                        name="typeID"
                        label="نوع تیکت"
                        // options={getTicketTypes()}
                        required={true}
                        changeOnSelect
                    />
                    <FormInput
                        name="title"
                        label="عنوان"
                        required={true}
                    />
                </ColumnGrid>
                <h4>توضیحات :</h4>
                <FormEditor
                    name="content"
                    // media={false}
                />
                <h4>بارگذاری فایل :</h4>
                <FormUpload
                    name="ticketFiles"
                />
                <ActionButton position="center">
                    <Button
                        type="primary-dark"
                        name='submit'
                        label='ارسال'
                        htmlType='submit'
                    />
                </ActionButton>
            </Form>
        </div>
    )
}
