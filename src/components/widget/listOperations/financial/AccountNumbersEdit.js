import { API_BASE_URL } from 'tools/shared/constants'
import ACL from 'components/ACL'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import WidgetCard from 'components/utils/widgetCard'

function AccountNumbersEdit() {

    return (
        <WidgetCard
            title="ویرایش شماره های حساب"
            des={
                <p>برای ویرایش <span className='success'>شماره های حساب </span>به صورت <span className='warning'>گروهی </span>،از این قسمت استفاده نمایید. لیست افراد باید در قالب یک <span className='warning'>فایل اکسل </span>در ورودی زیر وارد شود. برای دریافت فایل نمونه از لینک زیر استفاده نمایید. </p>
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
            <a href={`${API_BASE_URL}Content/templateExcel/test_updateaccountnumber.xlsx`} target="blank">
                <p className='accent'>دریافت فایل نمونه</p>
            </a>
            {/* Ali , Hossein , fix upload button */}
            <Button
                label="بارگذاری"
            />
        </WidgetCard>
    )
}

export default ACL(AccountNumbersEdit)
