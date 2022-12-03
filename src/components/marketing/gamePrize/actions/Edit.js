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
                <h1>ویرایش جوایز بازی "{dataList[0].title}"</h1>
                <Form
                    onFinish={onFinish}
                    initialValues={dataList[0]}
                >
                    <Row className="filter-form">
                        <ColumnGrid col={fieldCol}>
                            <FormSelectSearch
                                name="gameID"
                                label="بازی"
                                items={games}
                            />
                            <FormInput
                                name="title"
                                label="عنوان"
                                required={true}
                            />
                            <FormInputColor
                                name="fillStyle"
                                label="رنگ پس زمینه"
                            />
                            <FormInputColor
                                name="textFillStyle"
                                label="رنگ متن"
                            />
                            <FormSelect
                                name="discountType"
                                label="نوع تخفیف"
                                required={true}
                                items={[
                                    {
                                        text: "هزینه ارسال",
                                        value: 1
                                    },
                                    {
                                        text: "سبد خرید",
                                        value: 2
                                    },
                                    {
                                        text: "سبد هزینه ارسال + سبد خرید",
                                        value: 3
                                    }
                                ]}
                            />
                            <FormInputNumber
                                name="chance"
                                label="شانس"
                                required={true}
                            />
                            <FormInputNumber
                                name="discount"
                                label="تخفیف"
                                required={true}
                            />
                            <FormSelect
                                name="isPercent"
                                label="درصدی"
                                required={true}
                                items={[
                                    {
                                        text: "بلی",
                                        value: true
                                    },
                                    {
                                        text: "خیر",
                                        value: false
                                    }
                                ]}
                            />
                            <FormInputNumber
                                name="maxWinnerCountPerUser"
                                label="تعداد برنده شدن کاربر"
                                required={true}
                            />
                            <FormDatePicker
                                name="startDateTime"
                                label="تاریخ شروع"
                            />
                            <FormDatePicker
                                name="endDateTime"
                                label="تاریخ پایان"
                            />
                            <FormInputNumber
                                name="expireDay"
                                label="تعداد روز فعال"
                                required={true}
                            />
                            <FormInputNumber
                                name="minItemPrice"
                                label="حداقل مبلغ سبد خرید"
                                required={true}
                            />
                            <FormInputNumber
                                name="maxPrice"
                                label="حداکثر مبلغ تخفیف"
                                required={true}
                            />
                            <FormInputNumber
                                name="maxUsedPerOrder"
                                label="حداکثر سفارش کاربر"
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
