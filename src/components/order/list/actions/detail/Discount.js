import CustomTable from 'components/utils/table/CustomTable'
import { addCommaToNumber } from 'tools/utils'

function Discount({ dataSource, entity }) {

    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        },
        {
            title: " عنوان",
            key: "title"
        },
        {
            title: "کد تخفیف",
            key: "discountCode"
        },
        {
            title: "نوع تخفیف",
            key: "discountType",
        },
        {
            title: "مقدار تخفیف",
            key: "discount",
        },
        {
            title: "مبلغ تخفیف ",
            key: "totalDiscount",
            render: (r, f) => `${addCommaToNumber(r / 10)} تومان`
        },
        {
            title: " درصدی ",
            key: "isPercent",
            render: (f) => f ? <span className="approved" title='بلی' /> : <span className="unapproved" title='خیر' />
        },
        {
            title: "شروع ",
            key: "startDateTime",
        },
        {
            title: "پایان",
            key: "endDateTime",
        }
    ]

    return (
        <CustomTable
            dataSource={dataSource}
            entity={entity}
            columns={columns}
            rowKey='title'
        />
    )
}

export default Discount