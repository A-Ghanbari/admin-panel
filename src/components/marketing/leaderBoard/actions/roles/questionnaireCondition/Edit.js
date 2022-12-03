import { editQuestionnaireCondition } from "store/actions/leaderBoard"
import { handleDetailsQuestionnaireCondition, removeHoursFromDate } from "tools/utils"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid, Row } from "components/utils/grid"
import { useSelector } from "react-redux"
import { getQuestionnaireGroupDetail, getQuestionnaireGroupList } from "store/actions/questionnaire"
import { QUESTIONNAIRE_GROUP as entity } from 'tools/utils/entities'
import { useEffect } from "react"
import TableWithoutEntity from "components/utils/table/TableWithoutEntity"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit({ setType, initialValue, ID }) {

    const { dataList } = useSelector(s => s[entity.pluralizeName])
    const onChangeHandler = (ID) => {
        getQuestionnaireGroupDetail({ pageIndex: 1, pageSize: 10000, ID })
    }
    const onFinish = (values) => {
        const fields = {
            ...handleDetailsQuestionnaireCondition(values),
            ID: initialValue.ID,
        }
        editQuestionnaireCondition(fields)
    }
    useEffect(() => {
        getQuestionnaireGroupList({ pageIndex: 1, pageSize: 10000 })
    }, [])

    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1,
            width: "5%",
        },
        {
            title: "عنوان",
            key: "marketingQuestionTitle",
            width: "20%",
        },
        {
            title: "امتیاز",
            key: "point",
            width: "5%",
            render: (r, f) =>
                <FormInputNumber
                    defaultValue={r}
                    name={`pointQuestion-${f.ID}`} />
        }]


    return (
        <Form
            onFinish={onFinish}
            initialValues={initialValue} >

            <Button onClick={() => setType("create")} label="ایجاد" />

            <ColumnGrid col={fieldCol}>
                <FormSelect
                    name="marketingQuestionID"
                    label="پرسشنامه"
                    required={true}
                    items={dataList.map(({ ID: value, title: text }) => ({ value, text }))}
                    onChange={onChangeHandler}
                />
                <FormInput
                    name="point"
                    label="امتیاز"
                    required={true}
                />
                <FormInput
                    name="message"
                    label="پیام"
                    required={true}
                />
                <FormSelect
                    name="status"
                    label="وضعیت"
                    required={true}
                    items={[
                        {
                            text: "فعال",
                            value: 1
                        },
                        {
                            text: "غیر فعال",
                            value: 2
                        },
                    ]}
                />
            </ColumnGrid>
            {initialValue.details?.length > 0 && <div className="height-scroll">
                <TableWithoutEntity
                    dataSource={initialValue.details}
                    columns={columns}
                />
            </div>}
            <ButtonWithConfirm />
        </Form>
    )
}
