import { Input } from "components/utils/field/input"
import { ColumnGrid } from "components/utils/grid"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 8 }

export default function ProductScan() {

    const handlePressEnter = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="product-scan">
            <ColumnGrid col={fieldCol}>
                <Input
                    name="scan"
                    placeholder="اسکن محصول"
                    onPressEnter={handlePressEnter}
                />
            </ColumnGrid>
        </div>
    )
}