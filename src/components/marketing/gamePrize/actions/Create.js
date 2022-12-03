import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createGamePrize, getGamesList } from "store/actions/leaderBoard"
import { GAMES_LIST as gamesListEntity } from "tools/utils/entities"
import { checkFilters, getSelectItems } from "tools/utils"
import { ColumnGrid, Row } from "components/utils/grid"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import FormInputColor from "components/utils/form/items/FormInputColor"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormDatePicker from "components/utils/form/items/FormDatePicker"


const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const { dataList: gamesList } = useSelector((s) => s[gamesListEntity.pluralizeName])
    const games = getSelectItems(gamesList)

    useEffect(() => {
        getGamesList({ pagesize: 10000 })
    }, [])

    const onFinish = (values) => {

        createGamePrize(
            checkFilters({
                ...values,
                MaxUsedPerUser: 1

            }))
        navigate(-1)
    }

    return (
        <div className="form-card">
            <h3>ایجاد جوایز بازی</h3>
            <Form
                onFinish={onFinish}
            >
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormSelectSearch
                            name="GameID"
                            label="بازی"
                            items={games}
                        />
                        <FormInput
                            name="Title"
                            label="عنوان"
                            required={true}
                            />
                        <FormInputColor
                            name="FillStyle"
                            label="رنگ پس زمینه"
                            required={true}
                            />
                        <FormInputColor
                            name="TextFillStyle"
                            label="رنگ متن"
                            required={true}
                        />
                        <FormSelect
                            name="DiscountType"
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
                            name="Chance"
                            label="شانس"
                            required={true}
                        />
                        <FormInputNumber
                            name="Discount"
                            label="تخفیف"
                            required={true}
                        />
                        <FormSelect
                            name="IsPercent"
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
                            name="MaxWinnerCountPerUser"
                            label="تعداد برنده شدن کاربر"
                            required={true}
                        />
                        <FormDatePicker
                            name="StartDateTime"
                            label="تاریخ شروع"
                        />
                        <FormDatePicker
                            name="EndDateTime"
                            label="تاریخ پایان"
                        />
                        <FormInputNumber
                            name="ExpireDay"
                            label="تعداد روز فعال"
                            required={true}
                        />
                        <FormInputNumber
                            name="MinItemPrice"
                            label="حداقل مبلغ سبد خرید"
                            required={true}
                        />
                        <FormInputNumber
                            name="MaxPrice"
                            label="حداکثر مبلغ تخفیف"
                            required={true}
                        />
                        <FormInputNumber
                            name="MaxUsedPerOrder"
                            label="حداکثر سفارش کاربر"
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
                                }
                            ]}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}
