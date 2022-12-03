import { API_BASE_URL } from "tools/shared/constants"
import ACL from "components/ACL"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import WidgetCard from "components/utils/widgetCard"

function OrdersByCode() {
    return (
        <WidgetCard
            title="لیست سفارش طبق کد سفارش"
            des={
                <p>
                    برای دریافت
                    <span className="success"> لیست سفارش طبق کد سفارش </span>به
                    صورت <span className="warning"> گروهی </span>،از این قسمت
                    استفاده نمایید. لیست کد سفارش باید در قالب یک
                    <span className="warning"> فایل اکسل </span>در ورودی زیر وارد
                    شود. برای دریافت فایل نمونه از لینک زیر استفاده نمایید.
                </p>
            }
            actions={[
                <ActionButton position="center">
                    <Button type="primary-dark" label="دریافت فایل" />
                </ActionButton>,
            ]}
        >
            <a
                href={`${API_BASE_URL}Content/templateExcel/test_OrderChangeStatus.xlsx`}
                target="blank"
            >
                <p className="accent">دریافت فایل نمونه</p>
            </a>
            {/* Ali , Hossein , fix upload button */}
            <Button label="بارگذاری" />
        </WidgetCard>
    )
}

export default ACL(OrdersByCode)
