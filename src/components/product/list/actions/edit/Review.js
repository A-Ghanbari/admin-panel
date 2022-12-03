import useWindowSize from 'hooks/useWindowSize'
import FormEditor from 'components/utils/form/items/FormEditor'
import { FormTextArea } from 'components/utils/form/items/FormTextArea'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 24, md: 24, lg: 24, xl: 12, xxl: 12 }
export default function Review() {
    const { width } = useWindowSize()

    return (
        <>
            <h1>نقد و بررسی</h1>
            <p className='more-description'>توضیح کامل :</p>
            <FormEditor
                name="moreDescription"
            />
            <ColumnGrid col={fieldCol}>
                <FormTextArea
                    label="توضیح مختصر"
                    name="description"
                />
                <FormTextArea
                    label="موارد استفاده"
                    name="uses"
                />
                <FormTextArea
                    label="روش استفاده"
                    name="howToUse"
                />
                <div>
                    {width < 768 && <p style={{ margin: 0 }}>(هر مزیت را با استفاده از یک " ,"  جدا کنید به طور مثال : قیمت مناسب , ارزش خرید)</p>}
                    <FormTextArea
                        label={width > 767 ? 'مزایا ( هر مزیت را با استفاده از یک " ,"  جدا کنید به طور مثال : قیمت مناسب , ارزش خرید )' : 'مزایا'}
                        name="productsAdvantages"
                    />
                </div>
                <div>
                    {width < 768 && <p style={{ margin: 0 }}>(هر عیب را با استفاده از یک " ,"  جدا کنید به طور مثال : حجم کم , رنگ محدود)</p>}
                    <FormTextArea
                        label={width > 767 ? 'معایب ( هر مزیت را با استفاده از یک " ,"  جدا کنید به طور مثال : حجم کم , رنگ محدود )' : 'معایب'}
                        name="productsDisAdvantages"
                    />
                </div>
            </ColumnGrid>
        </>
    )
}
