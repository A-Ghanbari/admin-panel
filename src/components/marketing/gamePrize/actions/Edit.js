import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editGamePrize, getGamePrizeList, getGamesList } from "store/actions/leaderBoard"
import { GAME_PRIZE as entity, GAMES_LIST as gamesListEntity } from "tools/utils/entities"
import { checkFilters, getSelectItems, removeHoursFromDate } from "tools/utils"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import { ColumnGrid, Row } from "components/utils/grid"
import FormInputColor from "components/utils/form/items/FormInputColor"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import Skeleton from "components/utils/skeleton"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit() {
    const navigate = useNavigate()
    const { ID } = useParams()

    const { dataList: gamesList } = useSelector((s) => s[gamesListEntity.pluralizeName])
    const games = getSelectItems(gamesList)

    useEffect(() => {
        getGamesList({ pagesize: 10000 })
        getGamePrizeList({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const onFinish = (values) => {
        editGamePrize(
            checkFilters({
                ID,
                ...values,
                endDateTime: removeHoursFromDate(values.endDateTime),
                startDateTime: removeHoursFromDate(values.startDateTime),
                MaxUsedPerUser: 1

            }))
        navigate(-1)
    }

    return (
        <div className="section-card">
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>???????????? ?????????? ???????? "{dataList[0].title}"</h1>
                <Form
                    onFinish={onFinish}
                    initialValues={dataList[0]}
                >
                    <Row className="filter-form">
                        <ColumnGrid col={fieldCol}>
                            <FormSelectSearch
                                name="gameID"
                                label="????????"
                                items={games}
                            />
                            <FormInput
                                name="title"
                                label="??????????"
                                required={true}
                            />
                            <FormInputColor
                                name="fillStyle"
                                label="?????? ???? ??????????"
                            />
                            <FormInputColor
                                name="textFillStyle"
                                label="?????? ??????"
                            />
                            <FormSelect
                                name="discountType"
                                label="?????? ??????????"
                                required={true}
                                items={[
                                    {
                                        text: "?????????? ??????????",
                                        value: 1
                                    },
                                    {
                                        text: "?????? ????????",
                                        value: 2
                                    },
                                    {
                                        text: "?????? ?????????? ?????????? + ?????? ????????",
                                        value: 3
                                    }
                                ]}
                            />
                            <FormInputNumber
                                name="chance"
                                label="????????"
                                required={true}
                            />
                            <FormInputNumber
                                name="discount"
                                label="??????????"
                                required={true}
                            />
                            <FormSelect
                                name="isPercent"
                                label="??????????"
                                required={true}
                                items={[
                                    {
                                        text: "??????",
                                        value: true
                                    },
                                    {
                                        text: "??????",
                                        value: false
                                    }
                                ]}
                            />
                            <FormInputNumber
                                name="maxWinnerCountPerUser"
                                label="?????????? ?????????? ?????? ??????????"
                                required={true}
                            />
                            <FormDatePicker
                                name="startDateTime"
                                label="?????????? ????????"
                            />
                            <FormDatePicker
                                name="endDateTime"
                                label="?????????? ??????????"
                            />
                            <FormInputNumber
                                name="expireDay"
                                label="?????????? ?????? ????????"
                                required={true}
                            />
                            <FormInputNumber
                                name="minItemPrice"
                                label="?????????? ???????? ?????? ????????"
                                required={true}
                            />
                            <FormInputNumber
                                name="maxPrice"
                                label="???????????? ???????? ??????????"
                                required={true}
                            />
                            <FormInputNumber
                                name="maxUsedPerOrder"
                                label="???????????? ?????????? ??????????"
                                required={true}
                            />
                            <FormSelect
                                name="status"
                                label="??????????"
                                required={true}
                                items={[
                                    {
                                        text: "????????",
                                        value: 1
                                    },
                                    {
                                        text: "?????? ????????",
                                        value: 2
                                    }
                                ]}
                            />
                        </ColumnGrid>
                        <ButtonWithConfirm />
                    </Row>
                </Form>
            </Skeleton>
        </div>
    )
}
