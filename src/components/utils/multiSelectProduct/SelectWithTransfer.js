import TableTransfer from 'components/utils/field/transfer/Table';
import Tag from 'components/utils/tag';
import { useSelector } from 'react-redux'
import {
    BRAND_WITH_PRODUCT_LIST as entity,
} from "tools/utils/entities"

const leftTableColumns = [
    {
        dataIndex: 'title',
        title: 'کالا',
    }, {
        dataIndex: 'tag',
        title: 'برند',
        render: (tag) => <Tag tag={tag} />,
    }
];

const rightTableColumns = [
    {
        dataIndex: 'title',
        title: 'کالا',
    }, {
        dataIndex: 'tag',
        title: 'برند',
        render: (tag) => <Tag tag={tag} />,
    }
];

export default function SelectWithTransfer({ value, onChange }) {
    const mockData = []

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    if (data.length) {
        for (const brand of data) {
            for (const product of brand.products) {
                mockData.push({
                    key: product.ID,
                    title: product.productName,
                    disabled: false,
                    tag: brand.brandName,
                })
            }
        }
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