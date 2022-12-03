import FormInput from "components/utils/form/items/FormInput"
import FormTextArea from "components/utils/form/items/FormTextArea"
import { ColumnGrid } from "components/utils/grid"
const fieldCol = { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }
export default function Social() {
    return (
        <>
            <ColumnGrid col={fieldCol}>
                <FormInput
                    name="facebookTitle"
                    label="عنوان فیسبوک"
                    required={true}
                />
                <FormTextArea
                    name="facebookDescription"
                    label="توضیحات فیسبوک"
                    required={true}
                />
                <FormInput
                    name="twitterTitle"
                    label="عنوان توئیتر"
                    required={true}
                />
                <FormTextArea
                    name="twitterDescription"
                    label="توضیحات توئیتر"
                    required={true}
                />
            </ColumnGrid>
        </>
    )
}
