import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelect from "components/utils/form/items/FormSelect"
import FormTextArea from "components/utils/form/items/FormTextArea"
import FormUpload from "components/utils/form/items/FormUpload"
import { ColumnGrid } from "components/utils/grid"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Overview() {
    return (
        <>
            <FormUpload
                name="Logo"
                label="لوگو"
            />
            <ColumnGrid col={fieldCol}>
                <FormInput
                    name="Title"
                    label="عنوان"
                    required={true}
                />
                <FormDatePicker
                    name="StartDateTime"
                    label="تاریخ شروع"
                    required={true}
                />
                <FormDatePicker
                    name="EndDateTime"
                    label="تاریخ پایان"
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
                        },
                    ]}
                />
                <FormInput
                    name="Slug"
                    label="پیوند یکتا"
                    required={true}
                />
                <FormInputNumber
                    name="MaxUser"
                    label="حداکثر کاربر"
                    required={true}
                />
            </ColumnGrid>
            <FormTextArea
                name="Description"
                label="توضیحات"
                required={true}
            />
        </>
    )
}
