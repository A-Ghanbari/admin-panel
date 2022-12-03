import { API_BASE_URL } from "tools/shared/constants"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelect from "components/utils/form/items/FormSelect"
import FormTextArea from "components/utils/form/items/FormTextArea"
import FormUpload from "components/utils/form/items/FormUpload"
import { ColumnGrid } from "components/utils/grid"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Overview({ data }) {
    return (
        <>
            <FormUpload
                name="logo"
                label="لوگو"
                accept=".png,.jpg,.jpeg"
                maxCount={1}
                defaultFileList={[{
                    status: 'done',
                    url: `${API_BASE_URL}/${data.logo}`,
                }]}
            />
            <ColumnGrid col={fieldCol}>
                <FormInput
                    name="title"
                    label="عنوان"
                    required={true}
                />
                <FormDatePicker
                    name="startDateTime"
                    label="تاریخ شروع"
                    required={true}
                />
                <FormDatePicker
                    name="endDateTime"
                    label="تاریخ پایان"
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
                        },
                    ]}
                />
                <FormInput
                    name="slug"
                    label="پیوند یکتا"
                    required={true}
                />
                <FormInputNumber
                    name="maxUser"
                    label="حداکثر کاربر"
                    required={true}
                />
            </ColumnGrid>
            <FormTextArea
                name="description"
                label="توضیحات"
                required={true}
            />
        </>
    )
}
