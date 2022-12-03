import { useEffect } from 'react'
import { FormInput } from 'components/utils/form/items/FormInput'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormUpload from 'components/utils/form/items/FormUpload'
import { ColumnGrid } from 'components/utils/grid'
import GroupTreeSelect from 'components/utils/groupSelect.js/GroupTreeSelect'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Info({ data, groupValue, setGroupValue }) {

    useEffect(() => {
        setGroupValue(data?.parentID)
    }, [data])

    return (
        <>
            <FormUpload
                name="backGroundImage"
                label="عکس پس زمینه"
                maxCount={1}
                defaultFileList={[{
                    status: 'done',
                    url: data?.backGroundImage,
                }]}
            />
            <ColumnGrid col={fieldCol}>
                <FormInput
                    name="name"
                    label="نام گروه"
                    required={true}
                />
                <FormInput
                    name="latinName"
                    label="نام گروه (لاتین)"
                    required={true}
                />
                <GroupTreeSelect
                    value={groupValue}
                    setValue={setGroupValue}
                    required={true}
                />
                <FormInput
                    name="slug"
                    label="پیوند یکتا"
                />
                <FormInput
                    name="sort"
                    label="اولویت"
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
                <FormInput
                    name="description"
                    label="توضیحات"
                    required={true}
                />
            </ColumnGrid>
            <FormUpload
                name="picLink"
                label="عکس آیکون"
                maxCount={1}
                defaultFileList={[{
                    status: 'done',
                    url: data?.picLink,
                }]}
            />
        </>
    )
}
