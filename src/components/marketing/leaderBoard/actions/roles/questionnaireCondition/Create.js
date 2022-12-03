import { createQuestionnaireCondition, createReagentCondition } from "store/actions/leaderBoard"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { QUESTIONNAIRE_GROUP as entity } from 'tools/utils/entities'
import { QUESTIONNAIRE_GROUP_DETAIL as entityDetail } from 'tools/utils/entities'
import { getQuestionnaireGroupDetail, getQuestionnaireGroupList } from "store/actions/questionnaire"
import TableWithoutEntity from "components/utils/table/TableWithoutEntity"
import { handleDetailsQuestionnaireCondition } from "tools/utils"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create({ ID }) {

    const { dataList } = useSelector(s => s[entity.pluralizeName])
    const { data } = useSelector(s => s[entityDetail.name])

    const onFinish = (values) => {
        createQuestionnaireCondition({
            ...handleDetailsQuestionnaireCondition(values),
            LeaderBoardID: ID
        })
    }

    const onChangeHandler = (ID) => {
        getQuestionnaireGroupDetail({ pageIndex: 1, pageSize: 10000, ID })
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
            key: "title",
            width: "20%",
        },
        {
            title: "امتیاز",
            key: "point",
            width: "5%",
            render: (r, f) =>
                <FormInputNumber name={`pointQuestion-${f.ID}`} />
        }]


    return (
        <Form
            onFinish={onFinish}
            initialValues={{ Status: 1 }}
        >
            <ColumnGrid col={fieldCol}>
                <FormSelect
                    name="MarketingQuestionID"
                    label="پرسشنامه"
                    required={true}
                    items={dataList.map(({ ID: value, title: text }) => ({ value, text }))}
                    onChange={onChangeHandler}
                />
                <FormInput
                    name="Point"
                    label="امتیاز"
                    required={true}
                />
                <FormInput
                    name="Message"
                    label="پیام"
                    required={true}
                />
                <FormSelect
                    name="Status"
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
            {data?.questions?.length > 0 && <div className="height-scroll">
                <TableWithoutEntity
                    dataSource={data.questions}
                    columns={columns}
                />
            </div>}

            <ButtonWithConfirm />
        </Form>

    )
}
