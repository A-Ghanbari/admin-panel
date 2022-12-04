import { downloadOrderInvoice, financeOrderInvoice, printOrderInvoice } from 'store/actions/export'
import Button from 'components/utils/field/button'
import { addCommaToNumber } from 'tools/utils'
import ActionButton from 'components/utils/actionsButton'
import CustomTable from 'components/utils/table/CustomTable'

function Invoice({ orderID, entity, dataSource }) {

    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: " کد",
            key: "productID"
        }, {
            title: "تصویر",
            key: "picLink",
            render: (r, f) => <img src={r} width={32} />
        }, {
            title: "نام کالا",
            key: "name"
        }, {
            title: "برند",
            key: "brandName"
        }, {
            title: "قیمت",
            key: "price",
        }, {
            title: "وزن",
            key: "totalWeight",
            render: (r, f) => `${r} گرم`
        }, {
            title: "تعداد",
            key: "count",
        }, {
            title: "قیمت کل",
            key: "totalPrice",
            render: (r, f) => `${addCommaToNumber(r / 10)} تومان`
        },
    ]

    return (
        <>
            <ActionButton position="right">
                <Button
                    type="secondary-dark"
                    label="پرینت فاکتور"
                    // onClick={() => window.open(`/export/acc/${orderID}`, '_bla/nk')}
                />
                <Button
                    type="secondary-warning"
                    label="دانلود فاکتور"
                    // onClick={() => downloadOrderInvoice({ orderID: orderID })}
                />
                <Button
                    type="secondary-warning"
                    label="دانلود فاکتور مالی"
                    // onClick={() => financeOrderInvoice({ orderID: orderID })}
                />
            </ActionButton>
            <CustomTable
                dataSource={dataSource}
                entity={entity}
                columns={columns}
                rowKey='productID'
            />
        </>
    )
}

export default Invoice