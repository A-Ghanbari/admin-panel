import React from 'react'
import { useSelector } from 'react-redux'
import {
    BRAND_WITH_PRODUCT_LIST as entity,
} from "tools/utils/entities"
import TreeSelect from 'components/utils/field/treeSelect'

export default function SelectWithTree({ value, setValue }) {
    const treeData = []
    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    if (data.length) {
        for (const [parentIndex, parentValue] of data.entries()) {
            treeData.push({
                title: parentValue.brandName,
                value: `0-${parentIndex}`,
                key: `0-${parentIndex}`,
                children: [],
            })
            for (const [childIndex, childValue] of parentValue.products.entries()) {
                treeData[parentIndex].children.push({
                    title: childValue.productName,
                    value: `0-${parentIndex}-${childIndex}`,
                    key: `0-${parentIndex}-${childIndex}`,
                })

            }
        }
    }

    const onChange = (value) => {
        for (const item of value) {
            const [parent, group, product] = item.split('-')
            console.log(parent, group, product);
        }
        // setValue(value)
    }

    return (
        <>

            {
                treeData.length &&
                <TreeSelect
                    treeCheckable={true}
                    showSearch={true}
                    treeData={treeData}
                    value={value}
                    onChange={onChange}
                />
            }
        </>
    )
}