import { useRef, useState } from "react"
import { Table as AntTable } from "antd"
import "components/utils/table/table.scss"
import { useSelector } from "react-redux"
import { addCommaToNumber } from "tools/utils"
import useDraggableScroll from 'hooks/useDraggableScroll'
import Notification from 'components/utils/notification'

const convertColumns = (columns) =>
    columns.map((c) => ({ ...c, dataIndex: c.key }))

function Table({ data,entity, columns, rowKey = "ID", ...props }) {
    const [tableColumns] = useState(() => convertColumns(columns))

    const { dataList, loading, totalRecords } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const ref = useRef(null)
    const { onMouseDown } = useDraggableScroll(ref)

    const doubleClickHandler = (e) => {
        navigator.clipboard.writeText(e.target.innerText)
        Notification.success(`کپی شد : ${e.target.innerText}`)
    }

    return (
        <div>
            <div
                className='table scroll-x'
                ref={ref}
                onMouseDown={onMouseDown}
                onDoubleClick={doubleClickHandler}
            >
                <AntTable
                    className="table"
                    // bordered="true"
                    dataSource={data}
                    columns={tableColumns}
                    rowKey={rowKey}
                    pagination={false}
                    // loading={loading}
                    footer={() => `تعداد کل رکورد ها: ${addCommaToNumber(10)}`}
                    {...props}
                />
            </div>
        </div>

    )
}

export default Table