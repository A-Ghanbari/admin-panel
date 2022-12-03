import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'

export default function ProductsList({ dataSource }) {
    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        },
        {
            title: " کد کالا",
            key: "productID"
        },
        {
            title: "نام کالا",
            key: "productName"
        },
        {
            title: "تعداد",
            key: "count",
        },
    ]

    return (
        <TableWithoutEntity
            dataSource={dataSource}
            columns={columns}
            rowKey='productID' // Ali,Hossein : It does not have a unique key
        />
    )
}
