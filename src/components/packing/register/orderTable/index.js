import LabelTable from "components/packing/register/orderTable/LabelTable"
import ProductTable from "components/packing/register/orderTable/ProductTable"
import { ColumnGrid } from "components/utils/grid"

const fieldCol = { xs: 24, sm: 24, md: 24, lg: 24, xl: 12, xxl: 12 }

export default function OrderTable({ dataLabel, dataProduct }) {
    return (
        <ColumnGrid col={fieldCol}>
            <ProductTable data={dataProduct} />
            <LabelTable data={dataLabel} />
        </ColumnGrid>
    )
}