import { useRef, useState } from "react"
import { Table as AntTable } from "antd"
import useDraggableScroll from 'hooks/useDraggableScroll'
import Notification from 'components/utils/notification'
import "components/utils/table/table.scss"

const convertColumns = (columns) =>
    columns.map((c) => ({ ...c, dataIndex: c.key }))

export default function TableWithoutEntity({ columns, dataSource, rowKey = "ID", ...props }) {
    const [tableColumns] = useState(() => convertColumns(columns))
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
                    bordered="true"
                    dataSource={dataSource}
                    columns={tableColumns}
                    rowKey={rowKey}
                    pagination={false}
                    {...props}
                />
            </div>
        </div>
    )
}