import FormDatePicker from "components/utils/form/items/FormDatePicker"
import { FormInput } from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { ColumnGrid } from "components/utils/grid"
import { useSelector } from "react-redux"
import { getSelectItems } from "tools/utils"
import {
    GROUP_LIST as groupListEntity,
} from "tools/utils/entities"

export default function Specifications() {

    const { dataList: groupList } = useSelector((s) => s[groupListEntity.pluralizeName])
    const groups = getSelectItems(groupList)

    return (
        <>
            <ColumnGrid>
                <FormInput
                    name="title"
                    label="عنوان"
                    required={true}
                />
                <FormSelectSearch
                    name="categoryID"
                    label="گروه"
                    items={groups}
                />
                <FormDatePicker
                    name="publishDate"
                    label="تاریخ انتشار"
                />
                <FormSelect
                    name="statusCode"
                    label="کد وضعیت"
                    required={true}
                    items={[
                        {
                            text: "301",
                            value: 301
                        },
                        {
                            text: "302",
                            value: 302
                        },
                        {
                            text: "404",
                            value: 404
                        },
                        {
                            text: "410",
                            value: 410
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
        </>
    )
}
