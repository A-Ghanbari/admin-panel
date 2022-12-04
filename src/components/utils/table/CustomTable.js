import { useRef, useState } from "react"
import { Table as AntTable } from "antd"
import "components/utils/table/table.scss"
import { useSelector } from "react-redux"
import useDraggableScroll from 'hooks/useDraggableScroll'
import Notification from 'components/utils/notification'
import { detail } from "tools/shared/order"

const convertColumns = (columns) =>
    columns.map((c) => ({ ...c, dataIndex: c.key }))

function CustomTable({ entity, columns, dataSource, rowKey = "ID", ...props }) {
    const [tableColumns] = useState(() => convertColumns(columns))

    // const { data, loading } = useSelector(
    //     (s) => s[entity.name]
    // )

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
                    dataSource={detail[dataSource]}
                    columns={tableColumns}
                    rowKey={rowKey}
                    pagination={false}
                    // loading={loading}
                    {...props}
                />
            </div>
        </div>
    )
}

export default CustomTable