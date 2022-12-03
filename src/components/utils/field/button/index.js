import ACL from 'components/ACL'
import "components/utils/field/button/button.scss"

import {
    Button as AntButton,
} from 'antd'

function Button({ type = 'primary-acces', name, label, ...rest }) {
    return (
        <AntButton
            className={`button button-${type}`}
            name={name}
            type={type}
            {...rest}
        >
            {label}
        </AntButton>
    )
}

export default ACL(Button)
