import { useEffect } from "react"
import { useSelector } from "react-redux"
import { createGameCondition, getGamesList } from "store/actions/leaderBoard"
import { checkFilters, getSelectItems } from "tools/utils"
import { GAMES_LIST as gamesListEntity } from "tools/utils/entities"
import Form from "components/utils/form"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"
import { FormInputNumber } from "components/utils/form/items/FormInputNumber"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create({ ID }) {
    const { dataList: gamesList } = useSelector((s) => s[gamesListEntity.pluralizeName])
    const games = getSelectItems(gamesList)

    useEffect(() => {
        getGamesList({ pagesize: 10000 })
    }, [])

    const onFinish = (values) => {
        createGameCondition(checkFilters({
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
                    name="GameID"
                    label="بازی"
                    items={games}
                />
                <FormInputNumber
                    name="MaxUser"
                    label="حداکثر کاربر"
                    required={true}
                />
                <FormInputNumber
                    name="MaxUsedPerUser"
                    label="حداکثر تعداد استفاده"
                    required={true}
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
                <FormDatePicker
                    name="StartDate"
                    label="تاریخ شروع"
                />
                <FormDatePicker
                    name="EndDate"
                    label="تاریخ پایان"
                />
                <FormSelect
                    name="NeedToEndGame"
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
