import { useSelector } from 'react-redux'
import { dispatch } from 'store'
import { setFormStep } from 'store/actions/public'
import { GROUP_COLOR as entity } from 'tools/utils/entities'
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'

export default function Colors() {

    const { dataList } = useSelector(
        s => s[entity.pluralizeName]
    )

    const formStep = useSelector(
        (s) => s.formStep
    )

    const columns = [
        {
            title: "عنوان",
            key: "Title",
        },
        {
            title: "رنگ",
            key: "ColorCode",
            className: "color-code",
            render: (f, r) => (
                <div style={{ backgroundColor: `${f}` }}>{f}</div>
            ),
        },
    ]

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            dispatch(setFormStep({
                ...formStep,
                colors: selectedRowKeys
            }))
        },
        selectedRowKeys: formStep.colors
    }

    return (
        <div>
            <h1>رنگ ها</h1>
            <div className="height-scroll">
                <TableWithoutEntity
                    columns={columns}
                    dataSource={dataList}
                    rowSelection={{
                        type: "checkbox",
                        ...rowSelection,
                    }}
                />
            </div>
        </div>
    )
}
