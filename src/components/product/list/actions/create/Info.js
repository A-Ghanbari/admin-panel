import { useSelector } from 'react-redux'
import {
    BRAND_LIST as brandListEntity,
    GROUP_LIST as groupListEntity,
} from "tools/utils/entities"
import { sortList } from 'tools/utils'
import FormCascader from 'components/utils/form/items/FormCascader'
import FormInput from 'components/utils/form/items/FormInput'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import { ColumnGrid } from 'components/utils/grid'
import FormUpload from 'components/utils/form/items/FormUpload'

export default function Info() {

    const { dataList: brandList } = useSelector(
        (s) => s[brandListEntity.pluralizeName]
    )

    const { dataList: groupList } = useSelector(
        (s) => s[groupListEntity.pluralizeName]
    )

    const brands = []
    for (const item of sortList(brandList)) {
        brands.push({
            text: item.name,
            value: item.ID
        })
    }

    const groups = []
    for (const item of sortList(groupList)) {
        if (!item.parentID) {
            let group = {
                label: item.name,
                value: item.ID,
                children: []
            }
            for (const child of groupList) {
                if (child.parentID !== null) {
                    if (child.parentID === group.value) {
                        let subGroup = {
                            label: child.name,
                            value: child.ID,
                            children: []
                        }
                        for (const sub of groupList) {
                            if (sub.parentID !== null) {
                                if (sub.parentID === subGroup.value) {
                                    subGroup.children.push({
                                        label: sub.name,
                                        value: sub.ID,
                                    })
                                }
                            }
                        }
                        group.children.push(subGroup)
                    }
                }
            }
            groups.push(group)
        }
    }

    return (
        <>
            <h1 >اطلاعات محصول</h1>
            <FormUpload
                name="piclinkMediaFiles"
                accept=".png,.jpg,.jpeg"
                required={true}
            />
            <ColumnGrid>
                <FormInput
                    label="نام محصول"
                    name="productName"
                    required={true}
                />
                <FormInput
                    label="نام انگلیسی"
                    name="latinName"
                    required={true}
                />
                <FormSelectSearch
                    label="نام برند "
                    name="brandID"
                    items={brands}
                    required={true}
                />
                <FormCascader
                    label="گروه "
                    name="categoryID"
                    options={groups}
                    required={true}
                    changeOnSelect={true}
                />
            </ColumnGrid>
        </>
    )
}
