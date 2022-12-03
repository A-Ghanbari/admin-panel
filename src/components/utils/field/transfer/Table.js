import { Table, Transfer as AntTransfer } from 'antd'
import difference from 'lodash/difference'
import "components/utils/field/transfer/transfer.scss"

export default function TableTransfer({ leftColumns, rightColumns, ...restProps }) {
    return (
        <AntTransfer {...restProps}>
            {({
                direction,
                filteredItems,
                onItemSelectAll,
                onItemSelect,
                selectedKeys: listSelectedKeys,
                disabled: listDisabled,
            }) => {
                const columns = direction === 'left' ? leftColumns : rightColumns;
                const rowSelection = {
                    getCheckboxProps: (item) => ({
                        disabled: listDisabled || item.disabled,
                    }),

                    onSelectAll(selected, selectedRows) {
                        const treeSelectedKeys = selectedRows
                            .filter((item) => !item.disabled)
                            .map(({ key }) => key);
                        const diffKeys = selected
                            ? difference(treeSelectedKeys, listSelectedKeys)
                            : difference(listSelectedKeys, treeSelectedKeys);
                        onItemSelectAll(diffKeys, selected);
                    },

                    onSelect({ key }, selected) {
                        onItemSelect(key, selected);
                    },

                    selectedRowKeys: listSelectedKeys,
                };
                return (
                    <Table
                        className="table"
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={filteredItems}
                        style={{
                            pointerEvents: listDisabled ? 'none' : undefined,
                            padding:"5px"

                        }}
                        onRow={({ key, disabled: itemDisabled }) => ({
                            onClick: () => {
                                if (itemDisabled || listDisabled) return;
                                onItemSelect(key, !listSelectedKeys.includes(key));
                            },
                        })}
                    />
                );
            }}
        </AntTransfer>
    )
}