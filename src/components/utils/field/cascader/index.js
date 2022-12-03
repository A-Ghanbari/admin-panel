import { Cascader as AntCascader } from "antd"
import "components/utils/field/cascader/cascader.scss"

function Cascader(props) {
    return (
        <AntCascader
            {...props}
            className="cascader"
            placement="bottomRight"
            getPopupContainer={(triggerNode) => triggerNode.parentElement}
        />
    )
}

export default Cascader
