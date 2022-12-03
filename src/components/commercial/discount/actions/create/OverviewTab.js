import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelect from "components/utils/form/items/FormSelect"
import { FormUpload } from "components/utils/form/items/FormUpload"
import { ColumnGrid } from "components/utils/grid"

export default function OverviewTab() {
    return (
        <>
            <FormUpload
                name="BackGroundImage"
                label="بارگذاری تصویر"
                required={true}
                maxCount={1}
            />
            <ColumnGrid>
                <FormInput
                    name="Title"
                    label="عنوان"
                    required={true}
                />
                <FormDatePicker
                    name="DateFrom"
                    label="از تاریخ"
                    required={true}
                />
                <FormDatePicker
                    name="DateTo"
                    label="تا تاریخ"
                    required={true}
                />
                <FormInputNumber
                    name="reCharge"
                    label="کوک مجدد"
                    required={true}
                />
                <FormSelect
                    name="Type"
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
                    name="IsActive"
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
        </>
    )
}
