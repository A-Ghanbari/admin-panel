import { useSelector } from "react-redux"
import { CONTENT_POSITION as positionEntity } from "tools/utils/entities"
import { getContentPositionSelectFormat } from "tools/utils"
import FormDatePicker from "components/utils/form/items/FormDatePicker"
import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import { ColumnGrid } from "components/utils/grid"
import GroupTreeSelect from "components/utils/groupSelect.js/GroupTreeSelect"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Overview({
    groupValue,
    setGroupValue,
    typeValue,
    setTypeValue,
}) {

    const { dataList: positionList } = useSelector(
        (s) => s[positionEntity.pluralizeName]
    )

    return (
        <>
            <ColumnGrid col={fieldCol}>
                <FormInput
                    name='Title'
                    label='عنوان'
                    required={true}
                />
                <FormDatePicker
                    name='PublishDate'
                    label='تاریخ انتشار'
                    required={true}
                />
                <FormSelect
                    name='Type'
                    label='نوع'
                    required={true}
                    onChange={(value) => setTypeValue(value)}
                    items={[{
                        text: 'اسلایدر',
                        value: 1
                    }, {
                        text: 'بنر',
                        value: 2
                    }, {
                        text: 'گروه محصولات',
                        value: 3
                    }, {
                        text: 'محصولات',
                        value: 4
                    }]}
                />
                <FormSelect
                    name='IsActive'
                    label='وضعیت'
                    required={true}
                    items={[{
                        text: 'فعال',
                        value: true
                    }, {
                        text: 'غیر فعال',
                        value: false
                    }]}
                />
                {
                    (typeValue === 3) &&
                    <GroupTreeSelect
                        value={groupValue}
                        setValue={setGroupValue}
                        required={true}
                    />
                }
            </ColumnGrid>
            <FormSelect
                name='PositionIDs'
                label='محل نمایش'
                required={true}
                allowClear
                mode="multiple"
                items={[...getContentPositionSelectFormat(positionList)]}
            />
        </>
    )
}
