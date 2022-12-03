import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editPostCompanies, getPostCompanies } from "store/actions/post"
import { API_BASE_URL } from "tools/shared/constants"
import { POST_COMPANY as entity } from "tools/utils/entities"
import { checkFilters } from "tools/utils"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import { ColumnGrid, Row } from "components/utils/grid"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import FormSelect from "components/utils/form/items/FormSelect"
import Skeleton from "components/utils/skeleton"
import FormProvinceAndCity from "components/utils/form/items/FormProvinceAndCity"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit() {
    const [province, setProvince] = useState({})
    const navigate = useNavigate()
    const { ID } = useParams()

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getPostCompanies({ ID })
        getProvince()
    }, [ID])

    const getProvince = () => {
        setProvince({
            provinceID: String(dataList[0].provinceID),
            cityID: String(dataList[0].cityID),
        })
    }
    const onFinish = (values) => {
        editPostCompanies(checkFilters({
            ID,
            ...values,
            ...province,
            provinceAndCity: undefined,
        }))
        navigate(-1)
    }

    return (
        <div className="form-card">
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h2>ویرایش شهر کد {ID}</h2>
                <a href={`${API_BASE_URL}Content/templateExcel/mehexcities.xlsx`} target="blank">
                    <p>دریافت فایل راهنمای کدهای ماهکس</p>
                </a>
                <Form
                    onFinish={onFinish}
                    initialValues={dataList[0]}
                >
                    <Row className="filter-form">
                        <ColumnGrid col={fieldCol}>
                            <FormProvinceAndCity
                                name="provinceAndCity"
                                label="استان و شهر"
                                disabled={true}
                                defaultValues={Object.values(province)}
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
            </Skeleton>
        </div>
    )
}
