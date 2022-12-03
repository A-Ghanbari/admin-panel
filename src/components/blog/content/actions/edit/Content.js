import FormEditor from "components/utils/form/items/FormEditor"
import FormInput from "components/utils/form/items/FormInput"
import { ColumnGrid } from "components/utils/grid"

export default function Content() {
    return (
        <>
            <ColumnGrid>
                <FormInput
                    name="name"
                    label="نام"
                    required={true}
                />
                <FormInput
                    name="title"
                    label="عنوان"
                    required={true}
                />
            </ColumnGrid>
            <h3>محتوا:</h3>
            <FormEditor
                type="document"
                name="blogContent"
                required={true}
            />
        </>
    )
}
