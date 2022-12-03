import { TreeSelect as AntTreeSelect } from 'antd'
import "components/utils/field/treeSelect/treeSelect.scss"
const { SHOW_PARENT } = AntTreeSelect

export default function TreeSelect({ ...props }) {
    return (
        <AntTreeSelect
            showCheckedStrategy={SHOW_PARENT}
            className="tree-select"
            style={{
                width: '100%',
            }}
            {...props} />
    )
}