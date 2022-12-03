import TableTransfer from 'components/utils/field/transfer/Table';
import Tag from 'components/utils/tag';
import { useSelector } from 'react-redux'
import { CITY_LIST as cityEntity, PROVINCE_LIST as provinceEntity } from "tools/utils/entities"

const leftTableColumns = [
    {
        dataIndex: 'title',
        title: 'شهر',
    }, {
        dataIndex: 'tag',
        title: 'استان',
        render: (tag) => <Tag tag={tag} />,
    }
];

const rightTableColumns = [
    {
        dataIndex: 'title',
        title: 'شهر',
    }, {
        dataIndex: 'tag',
        title: 'استان',
        render: (tag) => <Tag tag={tag} />,
    }
];

export default function MultiSelectProvince({ value, onChange }) {
    const mockData = []

    const provinceData = useSelector(
        (s) => s[provinceEntity.pluralizeName]
    )
    const cityData = useSelector(
        (s) => s[cityEntity.pluralizeName]
    )


    for (const city of cityData) {
        let provinceName = provinceData.filter((item) => item.value == city.parentID)
        mockData.push({
            key: city.value,
            title: city.text,
            disabled: false,
            tag: provinceName[0].text,
        })
    }

    return (
        <>
            <TableTransfer
                dataSource={mockData}
                targetKeys={value}
                onChange={(value) => onChange(value)}
                showSearch={true}
                filterOption={(inputValue, item) =>
                    item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
                }
                leftColumns={leftTableColumns}
                rightColumns={rightTableColumns}
            />
        </>
    );
};