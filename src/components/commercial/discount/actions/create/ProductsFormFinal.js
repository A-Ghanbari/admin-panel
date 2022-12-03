import { useSelector } from "react-redux"
import { dispatch, getState } from "store"
import Icon from "components/utils/field/Icon"
import TableWithoutEntity from "components/utils/table/TableWithoutEntity"

export default function ProductsFormFinal() {

    const data = useSelector(
        (s) => s.discountDraftData
    )
    
    const deleteHandler = (requestID) => {
        dispatch({
            type: "DISCOUNT_DRAFT_DATA",
            payload: getState()["discountDraftData"].filter(item => item.requestID !== requestID)
        })
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نام محصول",
            key: "productName",
            width: "10%",
        }, {
            title: "تامین کننده",
            key: "supplierName",
            width: "10%",
        }, {
            title: "انبار",
            key: "supplierWarehouseName",
            width: "10%",
        }, {
            title: "درصد",
            key: "Percent",
            width: "10%",
        }, {
            title: "تعداد",
            key: "MaxCount",
            width: "10%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon key="delete" type="delete" title="حذف محصول" onClick={() => deleteHandler(r.requestID)} />
                </div>
            ),
        }
    ]

    return (
        <div className='discount-product-list'>
            <TableWithoutEntity
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}