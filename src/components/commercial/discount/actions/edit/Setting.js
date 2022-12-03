import { useNavigate } from "react-router-dom"
import { settingEditCommercialDiscount } from "store/actions/commercial"
import { checkImageUrl, checkDateFormat } from "tools/utils"
import Form from "components/utils/form"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import { FormUpload } from "components/utils/form/items/FormUpload"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"
import FormInputNumber from "components/utils/form/items/FormInputNumber"

export default function Setting({ data }) {
    let navigate = useNavigate()

    const onFinish = (values) => {
        settingEditCommercialDiscount({
            ID: data.ID,
            ...values,
            backGroundImage: checkImageUrl(values.backGroundImage),
            dateFrom: checkDateFormat(values.dateFrom),
            dateTo: checkDateFormat(values.dateTo),
        })
        navigate(-1)
    }

    return (
        <Form
            initialValues={data}
            onFinish={onFinish}
        >
            <FormUpload
                name="backGroundImage"
                label="بارگذاری تصویر"
                required={true}
                maxCount={1}
                defaultFileList={[{
                    status: 'done',
                    url: data?.backGroundImage,
                }]}
            />
            <ColumnGrid>
                <FormInput
                    name="title"
                    label="عنوان"
                    required={true}
                />
                <FormDatePicker
                    name="dateFrom"
                    label="از تاریخ"
                    required={true}
                />
                <FormDatePicker
                    name="dateTo"
                    label="تا تاریخ"
                    required={true}
                />
                <FormInputNumber
                    name="reCharge"
                    label="کوک مجدد"
                    required={true}
                />
                <FormSelect
                    name="type"
                    label="نوع"
                    required={true}
                    items={[
                        {
                            text: "معمولی",
                            value: 1
                        },
                        {
                            text: "ویژه",
                            value: 2
                        },
                    ]}
                />
                <FormSelect
                    name="isActive"
                    label="وضعیت"
                    required={true}
                    items={[
                        {
                            text: "فعال",
                            value: true
                        },
                        {
                            text: "غیرفعال",
                            value: false
                        },
                    ]}
                />
            </ColumnGrid>
            <ButtonWithConfirm />
        </Form>
    )
}
