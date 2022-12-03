import ACL from "components/ACL"
import {
    Checkbox as AntCheckbox
} from 'antd'

export function Checkbox({ label, name, ...props }) {
    return (
        <AntCheckbox key={name} {...props}>{label}</AntCheckbox>
    )
}

export default ACL(Checkbox)