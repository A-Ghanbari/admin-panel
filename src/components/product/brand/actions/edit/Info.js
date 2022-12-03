import { FormInput } from 'components/utils/form/items/FormInput'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormUpload from 'components/utils/form/items/FormUpload'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Info({ data }) {

    return (
        <>
            <h4>بارگذاری لوگو :</h4>
            <FormUpload
                name="picLink"
                label="لوگو"
                maxCount={1}
                defaultFileList={[{
                    status: 'done',
                    url: data?.picLink,
                }]}
            />
            <ColumnGrid col={fieldCol}>
                <FormInput
                    name="name"
                    label="نام برند"
                    required={true}
                />
                <FormInput
                    name="latinName"
                    label="نام برند (لاتین)"
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
                    name="showInMain"
                    label="نمایش در سایت"
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
        </>
    )
}
