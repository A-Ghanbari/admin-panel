import CustomTable from 'components/utils/table/CustomTable';

export default function MainFactor({ dataSource, entity }) {
    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            label: "کد کالا",
            key: "productID",
        }, {
            label: "کد حواله",
            key: "commerceID",
        }, {
            label: "نام کالا",
            key: "productName",
        }, {
            label: "تعداد",
            key: "productCount",
        }
    ]

    return (
        <CustomTable
            dataSource={dataSource}
            entity={entity}
            columns={columns}
            rowKey='productID'
        />
    )
}