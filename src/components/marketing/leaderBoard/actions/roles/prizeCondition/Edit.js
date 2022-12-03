import { editPrizeCondition, getPrizesList } from "store/actions/leaderBoard"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { useSelector } from "react-redux"
import { getSelectItems } from "tools/utils"
import { useEffect } from "react"
import { PRIZES_LIST as prizesListEntity } from "tools/utils/entities"


const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit({ setType, initialValue, ID }) {

    const { dataList: gamesList } = useSelector((s) => s[prizesListEntity.pluralizeName])
    const prizes = getSelectItems(gamesList)

    useEffect(() => {
        getPrizesList({ pagesize: 10000 })
    }, [])

    const onFinish = (values) => {
        const fields = {
            ...values,
            ID: initialValue.ID,
        }
        editPrizeCondition(fields)
    }

    return (
        <Form
            onFinish={onFinish}
            initialValues={initialValue}
        >
            <Button onClick={() => setType("create")} label="ایجاد" />
            <ColumnGrid col={fieldCol}>
                <FormSelectSearch
                    name="giftID"
                    label="جایزه"
                    items={prizes}
                />
                <FormInput
                    name="title"
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
                    name="forRate"
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
                    name="rateStart"
                    label="رتبه شروع"
                    required={true}
                />
                <FormInput
                    name="rateEnd"
                    label="رتبه پایان"
                    required={true}
                />
                <FormInput
                    name="pointStart"
                    label="امتیاز شروع"
                    required={true}
                />
                <FormInput
                    name="pointEnd"
                    label="امتیاز پایان"
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
            <ButtonWithConfirm />
        </Form>
    )
}
