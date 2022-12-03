import { Select as AntSelect } from "antd"
import "components/utils/field/select/select.scss"

const { Option } = AntSelect

export default function Select({ items, defaultValue, ...props }) {
    return (
        <AntSelect
            defaultValue={defaultValue}
            className="select"
            getPopupContainer={(triggerNode) => triggerNode.parentElement}
            optionFilterProp="children"
            filterOption={(input, option) => option.children.includes(input)}
            {...props}
        >
            {items?.map((item) => (
                <Option key={item.value} value={item.value}>
                    {item.text}
                </Option>
            ))}
        </AntSelect>
    )
}