import ACL from "components/ACL"
import "components/utils/field/input/input.scss"

import {
    Input as AntInput,
    InputNumber as AntInputNumber
} from 'antd'

function TextArea({ children, count, ...props }) {
    return (
        <AntInput.TextArea
            showCount
            maxLength={count}
            autoSize
            {...props}
        >
            {children}
        </AntInput.TextArea>
    )
}
const TextAreaACL = ACL(TextArea)
export { TextAreaACL as TextArea }

function Input({ children, ...props }) {
    return (
        <AntInput allowClear className="ant-input-affix-wrapper input" {...props}>
            {children}
        </AntInput>
    )
}
const InputACL = ACL(Input)
export { InputACL as Input }

function InputPassword({ type, children, ...props }) {
    return (
        <AntInput.Password {...props} className="input">
            {children}
        </AntInput.Password>
    )
}
const InputPasswordACL = ACL(InputPassword)
export { InputPasswordACL as InputPassword }

function InputSearch({ type, children, ...props }) {
    return (
        <AntInput.Search {...props} >
            {children}
        </AntInput.Search>
    )
}
const InputSearchACL = ACL(InputSearch)
export { InputSearchACL as InputSearch }

function InputNumber({ children, ...props }) {
    return (
        <AntInputNumber {...props} >
            {children}
        </AntInputNumber>
    )
}
const InputNumberACL = ACL(InputNumber)
export { InputNumberACL as InputNumber }