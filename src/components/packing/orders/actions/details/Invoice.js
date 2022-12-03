import { PACKING_ORDER as entity } from "tools/utils/entities"
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'
import { useSelector } from "react-redux"

export default function Invoice() {
    const { data } = useSelector(
        (s) => s[entity.name]
    )
    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: "کد کالا",
            key: "productID"
        }, {
            title: "نام کالا",
            key: "productName",
        }, {
            title: "برند",
            key: "brandName"
        }, {
            title: "تعداد",
            key: "count"
        }
    ]

    const items = data.dataList[0].orderItems.productItems
    if (items === undefined) return (null)

    return (
        <>
            <TableWithoutEntity
                entity={entity}
                columns={columns}
                dataSource={items}
                rowKey='productID' />
        </>
    )
}