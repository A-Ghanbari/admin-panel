import { useState } from "react"
import { useParams } from "react-router-dom"
import { createDiscountProduct } from "store/actions/marketing"
import Button from "components/utils/field/button"
import ProductListTable from "components/utils/table/ProductListTable"

export default function Create() {
    const [product, setProduct] = useState([])
    const { ID } = useParams()

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            const rows = []
            selectedRows.map(row => (
                rows.push(row.ID)
            ))
            setProduct(rows)
        }
    }

    return (
        <>
            <Button
                type="primary-dark"
                label="ایجاد"
                onClick={() => createDiscountProduct({
                    BasicConditionID: ID,
                    products: product
                })}
            />
            <ProductListTable
                rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                }}
            />
        </>
    )
}
