import { editGameCondition, getGamesList } from "store/actions/leaderBoard"
import { checkFilters, getSelectItems, removeHoursFromDate } from "tools/utils"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { GAMES_LIST as gamesListEntity } from "tools/utils/entities"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit({ setType, initialValue, ID }) {

    const { dataList: gamesList } = useSelector((s) => s[gamesListEntity.pluralizeName])
    const games = getSelectItems(gamesList)

    useEffect(() => {
        getGamesList({ pagesize: 10000 })
    }, [])


    const onFinish = (values) => {
        const fields = {
            ...values,
            LeaderBoardID: ID,
            ID: initialValue.ID,
            startDate: removeHoursFromDate(values.startDate),
            endDate: removeHoursFromDate(values.endDate)
        }
        editGameCondition(checkFilters(fields))
    }

    return (
        <Form
            onFinish={onFinish}
            initialValues={initialValue}
        >
            <Button onClick={() => setType("create")} label="ایجاد" />
            <ColumnGrid col={fieldCol}>
            <FormSelectSearch
                    name="gameID"
                    label="بازی"
                    items={games}
                />
                <FormInputNumber
                    name="maxUser"
                    label="حداکثر کاربر"
                    required={true}
                />
                <FormInputNumber
                    name="maxUsedPerUser"
                    label="حداکثر تعداد استفاده"
                    required={true}
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
                <FormDatePicker
                    name="startDate"
                    label="تاریخ شروع"
                />
                <FormDatePicker
                    name="endDate"
                    label="تاریخ پایان"
                />
                <FormSelect
                    name="needToEndGame"
                    label="پایان بازی"
                    required={true}
                    items={[
                        {
                            text: "بلی",
                            value: true
                        },
                        {
                            text: "خیر",
                            value: false
                        },
                    ]}
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
