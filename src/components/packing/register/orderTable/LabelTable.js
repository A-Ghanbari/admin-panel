import TableWithoutEntity from "components/utils/table/TableWithoutEntity";

export default function LabelTable({ data }) {
    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: " کد کالا",
            key: "productID"
        }, {
            title: "نام کالا",
            key: "productName"
        }, {
            title: "تعداد",
            key: "count",
        }, {
            title: "مانده",
            key: "count",
        }
    ]

    return (
        <TableWithoutEntity
            dataSource={data}
            columns={columns}
            rowKey='productID'
        />
    )
}