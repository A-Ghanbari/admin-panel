import { useSelector } from "react-redux"
import { CITY_LIST as cityEntity, PROVINCE_LIST as provinceEntity } from "tools/utils/entities"
import Cascader from 'components/utils/field/cascader'

function ProvinceAndCity({ defaultValues, onChange, disabled = false, ...props }) {
    function filter(inputValue, path) {
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
    }
    const provinceData = useSelector(
        (s) => s[provinceEntity.pluralizeName]
    )
    const cityData = useSelector(
        (s) => s[cityEntity.pluralizeName]
    )

    const provinceAndCityList = [{ label: "همه", value: " ", disabled, }]

    for (const province of provinceData) {
        let provinceWithCityAsChildren = {
            label: province.text,
            value: province.value,
            children: [{
                label: 'همه',
                value: ' ',
                disabled
            }]
        }
        for (const city of cityData) {
            if (city.parentID == province.value) {
                provinceWithCityAsChildren.children.push({
                    label: city.text,
                    value: city.value,
                })
            }
        }
        provinceAndCityList.push(provinceWithCityAsChildren)
    }

    return (
        <Cascader
            options={provinceAndCityList}
            onChange={onChange}
            placeholder="لطفا شهر و استان را انتخاب کنید"
            showSearch={{ filter }}
            value={defaultValues}
            {...props}
        />
    )
}

export default ProvinceAndCity