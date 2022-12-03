import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createPostCompanies } from "store/actions/post"
import { API_BASE_URL } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import { ColumnGrid, Row } from "components/utils/grid"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import FormSelect from "components/utils/form/items/FormSelect"
import FormProvinceAndCity from "components/utils/form/items/FormProvinceAndCity"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const [province, setProvince] = useState()
    const navigate = useNavigate()

    const onFinish = (values) => {
        createPostCompanies(checkFilters({
            ...values,
            ...province,
            provinceAndCity: undefined,
        }))
        navigate(-1)
    }
    const initialValues = {
        isActive: true,
        postOffice: 1
    }

    return (
        <div className="form-card">
            <h2>ایجاد شهر جدید</h2>
            <a href={`${API_BASE_URL}Content/templateExcel/mehexcities.xlsx`} target="blank">
                <p>دریافت فایل راهنمای کدهای ماهکس</p>
            </a>
            <Form
                onFinish={onFinish}
                initialValues={initialValues}
            >
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormProvinceAndCity
                            name="provinceAndCity"
                            label="استان و شهر"
                            disabled={true}
                            required={true}
                            onChange={(selectedOptions) => {
                                setProvince({
                                    provinceID: selectedOptions[0],
                                    cityID: selectedOptions[1],
                                })
                            }}
                        />
                        <FormInput
                            name="provinceCode"
                            label="کد استان"
                            required={true}
                        />
                        <FormInput
                            name="cityCode"
                            label="کد شهر"
                            required={true}
                        />
                        <FormSelect
                            name="postOffice"
                            label="نوع پست"
                            items={[
                                {
                                    text: "پست پیشتاز (اشتهارد)",
                                    value: 1,
                                }, {
                                    text: "MAHEX",
                                    value: 2,
                                }, {
                                    text: "شاواز اکسپرس",
                                    value: 3,
                                }
                            ]}
                        />
                        <FormSelect
                            name="isActive"
                            label="فعال"
                            required={true}
                            items={[
                                {
                                    text: "بلی",
                                    value: true,
                                }, {
                                    text: "خیر",
                                    value: false,
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
