import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductCommerces, getProducts } from "store/actions/product"
import { createDiscountSupplier } from "store/actions/marketing"
import {
    PRODUCT as productsEntity,
    BRAND_LIST as brandsEntity,
    PRODUCT_COMMERCE as productCommerceEntity,
} from "tools/utils/entities"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import { ColumnGrid } from "components/utils/grid"
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import TableWithoutEntity from "components/utils/table/TableWithoutEntity"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const [loading, setLoading] = useState(true)
    const [supplires, setSuppliers] = useState([])
    const { ID } = useParams()

    const { dataList: productList, loading: productLoading } = useSelector((s) => s[productsEntity.pluralizeName])

    const { dataList: brandList } = useSelector((s) => s[brandsEntity.pluralizeName])

    const { dataList, loading: commersLoading } = useSelector((s) => s[productCommerceEntity.pluralizeName])

    const sortList = (data) =>
        [...data].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        )

    const products = []
    for (const item of productList) {
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

    const onValuesChange = (changedValues, allValues) => {
        if (changedValues.brandId === allValues.brandId) {
            getProducts({ brandID: allValues.brandId })
            setLoading(false)
        }
        if (changedValues.productSelect === allValues.productSelect) {
            getProductCommerces({ ProductID: allValues.productSelect })
        }
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            const rows = []
            selectedRows.map(row => (
                rows.push(row.commerceID)
            ))
            setSuppliers(rows)
        }
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نام کالا",
            key: "productName",
            width: "60%",
        }, {
            title: "تامین کننده",
            key: "supplierName",
            width: "20%",
        }, {
            title: "موجودی",
            key: "availableCount",
            width: "10%",
        }
    ]
    return (
        <div>
            <Button
                type="primary-dark"
                label="ایجاد"
                onClick={() => createDiscountSupplier({
                    BasicConditionID: ID,
                    CommerceIDs: supplires
                })}
            />
            <Form onValuesChange={onValuesChange}>
                <ColumnGrid col={fieldCol}>
                    <FormSelectSearch
                        label="برند "
                        name="brandId"
                        items={brands}
                    />
                    {
                        !loading && !productLoading &&
                        <FormSelectSearch
                            name="productSelect"
                            label="محصولات"
                            items={products}
                        />
                    }
                </ColumnGrid>
            </Form>
            {
                !commersLoading && !loading &&
                <TableWithoutEntity
                dataSource={dataList}
                columns={columns}
                rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                }}
                />
            }
        </div>
    )
}
