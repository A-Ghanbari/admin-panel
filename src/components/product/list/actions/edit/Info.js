import { useSelector } from 'react-redux'
import { sortList } from 'tools/utils'
import {
    BRAND_LIST as brandListEntity,
    GROUP_LIST as groupListEntity,
} from "tools/utils/entities"
import FormCascader from 'components/utils/form/items/FormCascader'
import FormInput from 'components/utils/form/items/FormInput'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import FormUpload from 'components/utils/form/items/FormUpload'
import { ColumnGrid } from 'components/utils/grid'

export default function Info({ data }) {

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
            <h1 >?????????????? ??????????</h1>
            <FormUpload
                name="piclinkMediaFiles"
                accept=".png,.jpg,.jpeg"
                maxCount={1}
                defaultFileList={[{
                    status: 'done',
                    url: data?.picLink,
                }]}
            />
            <ColumnGrid>
                <FormInput
                    label="?????? ??????????"
                    name="productName"
                    required={true}
                />
                <FormInput
                    label="?????? ??????????????"
                    name="latinName"
                    required={true}
                />
                <FormSelectSearch
                    label="?????? ???????? "
                    name="brandID"
                    items={brands}
                />
                <FormCascader
                    label="???????? "
                    name="categoryID"
                    options={groups}
                    required={true}
                    changeOnSelect={true}
                />
            </ColumnGrid>
        </>
    )
}
