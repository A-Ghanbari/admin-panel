import { useSelector } from 'react-redux'
import {
    PRODUCT as productsEntity,
    BRAND_LIST as brandsEntity,
} from "tools/utils/entities"
import { ColumnGrid } from 'components/utils/grid'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import ProductsTempForm from 'components/commercial/discount/actions/create/ProductsTempForm'
import ProductsFormFinal from 'components/commercial/discount/actions/create/ProductsFormFinal'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }
export default function ProductTab() {

    const { dataList } = useSelector((s) => s[productsEntity.pluralizeName])

    const { dataList: brandList } = useSelector((s) => s[brandsEntity.pluralizeName])

    const sortList = (data) =>
        [...data].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        )

    const products = []
    for (const item of dataList) {
        products.push({
            text: item.productName,
            value: item.ID,
        })
    }

    const brands = []
    for (const item of sortList(brandList)) {
        brands.push({
            text: item.name,
            value: item.ID,
        })
    }

    return (
        <div>
            <ColumnGrid col={fieldCol}>
                <FormSelectSearch
                    label="برند "
                    name="brandId"
                    items={brands}
                />
                <FormSelectSearch
                    name="productSelect"
                    label="محصولات"
                    items={products}
                />
            </ColumnGrid>
            <ProductsTempForm />
            <ProductsFormFinal />
        </div>
    )
}
