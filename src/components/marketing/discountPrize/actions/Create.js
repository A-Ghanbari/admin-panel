import { useNavigate } from "react-router-dom"
import { createDiscountPrize } from "store/actions/leaderBoard"
import { checkFilters } from "tools/utils"
import { ColumnGrid, Row } from "components/utils/grid"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormDatePicker from "components/utils/form/items/FormDatePicker"


const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const onFinish = (values) => {

        createDiscountPrize(
            checkFilters({
                ...values,
                MaxUsedPerUser: 1

            }))
        navigate(-1)
    }

    return (
        <div className="form-card">
            <h3>ایجاد جوایز کد تخفیف</h3>
            <Form
                onFinish={onFinish}
            >
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInputNumber
                            name="point"
                            label="امتیاز"
                            required={true}
                        />
                        <FormInput
                            name="Title"
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
                            label="حداقل قیمت سبد خرید"
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
