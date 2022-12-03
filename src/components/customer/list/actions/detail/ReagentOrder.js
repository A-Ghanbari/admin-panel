import ACL from 'components/ACL'
import CustomTable from 'components/utils/table/CustomTable'
import { addCommaToNumber } from 'tools/utils'

function ReagentOrder({ entity, dataSource }) {
    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: "شماره سفارش",
            key: "orderID"
        }, {
            title: "وضعیت سفارش",
            key: "orderStatusName",
        }, {
            title: "مبلغ سفارش",
            key: "totalPrice",
            render: (r, f) => `${addCommaToNumber(r / 10)} تومان`
        }, {
            title: "وضعیت انبار",
            key: "transStatusName"
        }, {
            title: "شماره همراه",
            key: "customerCell"
        }, {
            title: "تاریخ خرید",
            key: "orderDateTime"
        }
    ]
    return (
        <CustomTable
            dataSource={dataSource}
            entity={entity}
            columns={columns}
            rowKey='userName'
        />
    )
}

export default ACL(ReagentOrder)