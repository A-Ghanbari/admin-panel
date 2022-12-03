import { ColumnGrid } from "components/utils/grid"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6, xxl: 6 }
export default function OrderInfo({ data }) {
    return (
        <div className="register-order-info">
            <ColumnGrid col={fieldCol}>
                <div className="order-info"> <span className="bold">نوع سفارش: </span>{(data.isManual) ? "اپراتوری" : "سیستمی"}</div>
                <div className="order-info"><span className="bold">گیرنده:</span>‌ {data.receiverFirstName + " " + data.receiverLastName}</div>
            </ColumnGrid>
        </div>
    )
}