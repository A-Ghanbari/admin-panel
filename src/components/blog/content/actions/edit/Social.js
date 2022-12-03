import FormInput from "components/utils/form/items/FormInput"
import FormTextArea from "components/utils/form/items/FormTextArea"
import { ColumnGrid } from "components/utils/grid"

export default function Social() {
    return (
        <>

            <ColumnGrid>
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
