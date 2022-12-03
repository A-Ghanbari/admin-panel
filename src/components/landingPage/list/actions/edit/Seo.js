import FormInput from "components/utils/form/items/FormInput"
import FormSelect from "components/utils/form/items/FormSelect"
import FormTextArea from "components/utils/form/items/FormTextArea"
import { ColumnGrid } from "components/utils/grid"

export default function Seo() {
    return (
        <>
            <ColumnGrid>
                <FormInput
                    name="canonical"
                    label="canonical"
                    required={true}
                />
                <FormInput
                    name="slug"
                    label="پیوند یکتا"
                    required={true}
                />
                <FormSelect
                    name="isFollow"
                    label="isFollow"
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
                <FormSelect
                    name="isIndex"
                    label="isIndex"
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
            <FormTextArea
                name="description"
                label="توضیحات"
                required={true}
            />
        </>
    )
}
