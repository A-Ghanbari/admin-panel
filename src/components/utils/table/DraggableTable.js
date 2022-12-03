import { useRef, useCallback, useState } from "react"
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import { Table as AntTable } from "antd"
import Notification from 'components/utils/notification'
import "components/utils/table/table.scss"

const convertColumns = (columns) =>
    columns.map((c) => ({ ...c, dataIndex: c.key }))

export default function DraggableTable({ columns, dataSource, rowKey = "ID", files, setFiles, ...props }) {
    const [tableColumns] = useState(() => convertColumns(columns))

    const type = 'DraggableBodyRow'

    const DraggableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
        const ref = useRef(null)
        const [{ isOver, dropClassName }, drop] = useDrop({
            accept: type,
            collect: (monitor) => {
                const { index: dragIndex } = monitor.getItem() || {}
                if (dragIndex === index) {
                    return {}
                }
                return {
                    isOver: monitor.isOver(),
                    dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
                }
            },
            drop: (item) => {
                moveRow(item.index, index)
            },
        })
        const [, drag] = useDrag({
            type,
            item: {
                index,
            },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        })
        drop(drag(ref))
        return (
            <tr
                ref={ref}
                className={`${className}${isOver ? dropClassName : ''}`}
                style={{
                    cursor: 'move',
                    ...style,
                }}
                {...restProps}
            />
        )
    }

    const doubleClickHandler = (e) => {
        navigator.clipboard.writeText(e.target.innerText)
        Notification.success(`کپی شد : ${e.target.innerText}`)
    }
    const moveRow = useCallback(
        (dragIndex, hoverIndex) => {
            const dragRow = files[dragIndex]
            setFiles(
                update(files, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragRow],
                    ],
                }),
            )
        },
        [files],
    )
    const components = {
        body: {
            row: DraggableBodyRow,
        },
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                className='table scroll-x'
                onDoubleClick={doubleClickHandler}
            >
                <AntTable
                    className="table"
                    bordered="true"
                    dataSource={dataSource}
                    columns={tableColumns}
                    rowKey={rowKey}
                    pagination={false}
                    components={components}
                    onRow={(_, index) => {
                        const attr = {
                            index,
                            moveRow,
                        }
                        return attr
                    }}
                    {...props}
                />
            </div>
        </DndProvider>
    )
}
