import FormTextArea from 'components/utils/form/items/FormTextArea'

export default function SEO() {
    return (
        <>
            <FormTextArea
                label="عنوان صفحه"
                name="pageTitle"
                required={true}
            />
            <FormTextArea
                label="توضیح صفحه"
                name="pageDescription"
                required={true}
            />
            <FormTextArea
                label="کلمات کلیدی"
                name="pageKeyword"
                required={true}
            />
        </>
    )
}
