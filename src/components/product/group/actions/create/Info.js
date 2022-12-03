import { FormInput } from 'components/utils/form/items/FormInput'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormUpload from 'components/utils/form/items/FormUpload'
import { ColumnGrid } from 'components/utils/grid'
import GroupTreeSelect from 'components/utils/groupSelect.js/GroupTreeSelect'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Info({ groupValue, setGroupValue }) {

    return (
        <>
            <h4>بارگذاری عکس پس زمینه :</h4>
            <FormUpload
                name="BackgroundImage"
                label="عکس پس زمینه"
                maxCount={1}
            />
            <ColumnGrid col={fieldCol}>
                <FormInput
                    name="name"
                    label="نام گروه"
                    required={true}
                />
                <FormInput
                    name="LatinName"
                    label="نام گروه (لاتین)"
                    required={true}
                />
                <GroupTreeSelect
                    value={groupValue}
                    setValue={setGroupValue}
                    required={true}
                />
                <FormInput
                    name="Slug"
                    label="پیوند یکتا"
                />
                <FormInput
                    name="Sort"
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
                    name="Description"
                    label="توضیحات"
                    required={true}
                />
            </ColumnGrid>
            <h4>بارگذاری عکس آیکون :</h4>
            <FormUpload
                name="PicLink"
                label="عکس آیکون"
                maxCount={1}
            />
        </>
    )
}
