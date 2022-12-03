import { API_BASE_URL } from 'tools/shared/constants'
import ACL from 'components/ACL'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import WidgetCard from 'components/utils/widgetCard'

function CategoriesColor() {
    return (
        <WidgetCard
            title="درج رنگ گروه های کالا"
            des={
                <p>برای <span className='success'>اضافه کردن رنگ گروه های کالا </span>به صورت <span className='warning'>گروهی </span>،از این قسمت استفاده نمایید. لیست رنک  ها و گروه ها باید در قالب یک <span className='warning'>فایل اکسل </span>در ورودی زیر وارد شود. برای دریافت فایل نمونه از لینک زیر استفاده نمایید. </p>
            }
            actions={[
                <ActionButton position="center">
                    <Button
                        type="primary-dark"
                        label="تایید"
                    />
                </ActionButton>
            ]}
        >
            <a href={`${API_BASE_URL}Content/templateExcel/GetCategoriesFile.xlsx`} target="blank">
                <p className='accent'>دریافت فایل نمونه</p>
            </a>
            {/* Ali , Hossein , fix upload button */}
            <Button
                label="بارگذاری"
            />
        </WidgetCard>
    )
}

export default ACL(CategoriesColor)
