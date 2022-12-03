import { Tree as AntTree } from "antd"

export default function Tree({ data, ...props }) {
    return (
        <AntTree
            treeData={data}
            {...props}
        />
    )
}
