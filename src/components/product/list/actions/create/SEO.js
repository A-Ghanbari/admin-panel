import { FormTextArea } from 'components/utils/form/items/FormTextArea'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 8 }
export default function SEO() {
    return (
        <ColumnGrid col={fieldCol}>
            <FormTextArea
                label="عنوان صفحه"
                name="pageTitle"
            />
            <FormTextArea
                label="توضیح صفحه"
                name="pageDescription"
            />
            <FormTextArea
                label="کلمات کلیدی"
                name="pageKeyword"
            />
        </ColumnGrid>
    )
}
