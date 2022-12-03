import { createPrizeCondition, getPrizesList } from "store/actions/leaderBoard"
import { checkFilters, getSelectItems } from "tools/utils"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"
import { FormInputNumber } from "components/utils/form/items/FormInputNumber"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { PRIZES_LIST as prizesListEntity } from "tools/utils/entities"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create({ ID }) {
    const { dataList: gamesList } = useSelector((s) => s[prizesListEntity.pluralizeName])
    const prizes = getSelectItems(gamesList)

    useEffect(() => {
        getPrizesList({ pagesize: 10000 })
    }, [])

    const onFinish = (values) => {
        createPrizeCondition(checkFilters({
            ...values,
            LeaderBoardID: ID,
        }))
    }

    return (
        <Form
            onFinish={onFinish}
            initialValues={{ Status: 1 }}
        >
            <ColumnGrid col={fieldCol}>
                <FormSelectSearch
                    name="GiftID"
                    label="جایزه"
                    items={prizes}
                />
                <FormInput
                    name="Title"
                    label="عنوان"
                    required={true}
                />
                <FormInput
                    name="message"
                    label="پیام"
                    required={true}
                />
                <FormInputNumber
                    name="maxUser"
                    label="حداکثر کاربر"
                    required={true}
                />
                <FormSelect
                    name="ForRate"
                    label="مرجع"
                    required={true}
                    items={[
                        {
                            text: "براساس رتبه",
                            value: true
                        },
                        {
                            text: "براساس امتیاز",
                            value: false
                        },
                    ]}
                />
                <FormInput
                    name="RateStart"
                    label="رتبه شروع"
                    required={true}
                />
                <FormInput
                    name="RateEnd"
                    label="رتبه پایان"
                    required={true}
                />
                <FormInput
                    name="PointStart"
                    label="امتیاز شروع"
                    required={true}
                />
                <FormInput
                    name="PointEnd"
                    label="امتیاز پایان"
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
            <ButtonWithConfirm />
        </Form>
    )
}
