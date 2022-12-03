import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editDiscountPrize, getDiscountPrizeList } from "store/actions/leaderBoard"
import { DISCOUNT_PRIZE as entity } from "tools/utils/entities"
import { checkFilters, removeHoursFromDate } from "tools/utils"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import { ColumnGrid, Row } from "components/utils/grid"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import Skeleton from "components/utils/skeleton"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormDatePicker from "components/utils/form/items/FormDatePicker"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit() {
    const navigate = useNavigate()
    const { ID } = useParams()

    useEffect(() => {
        getDiscountPrizeList({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const onFinish = (values) => {
        editDiscountPrize(
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
                <h1>ویرایش جوایز بازی "{dataList[0]?.title}"</h1>
                <Form
                    onFinish={onFinish}
                    initialValues={dataList[0]}
                >
                    <Row className="filter-form">
                        <ColumnGrid col={fieldCol}>
                            <FormInputNumber
                                name="point"
                                label="امتیاز"
                                required={true}
                            />
                            <FormInput
                                name="title"
                                label="عنوان"
                                required={true}
                            />
                            <FormInputNumber
                                name="totalCreatedForAllCustomers"
                                label="تعداد کل مشتری ها"
                                required={true}
                            />
                            <FormInputNumber
                                name="totalCreatedForCustomer"
                                label="تعداد برنده شدن کاربر"
                                required={true}
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
                                name="maxPrice"
                                label="حداکثر مبلغ تخفیف"
                                required={true}
                            />
                            <FormInputNumber
                                name="minItemPrice"
                                label="حداقل قیمت سبد خرید"
                                required={true}
                            />

                            <FormInputNumber
                                name="maxUsedPerOrder"
                                label="حداکثر استفاده سفارش کاربر"
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
