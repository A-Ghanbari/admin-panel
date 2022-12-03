import TableWithoutEntity from "components/utils/table/TableWithoutEntity"

export default function ProductTable({ data }) {
    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: " کد کالا",
            key: "productID",
        }, {
            title: "نام کالا",
            key: "productName"
        }, {
            title: "تعداد",
            key: "count"
        }, {
            title: "مانده",
            key: "count"
        }
    ]

    return (

        //complete
        //completing
        //not-completed

        <TableWithoutEntity
            rowClassName={(record, index) => record.productID === 11197 ? "completing" : record.productID === 404 ? "complete" : "not-completed"}
            dataSource={data}
            columns={columns}
            rowKey='productID'
        />
    )
}