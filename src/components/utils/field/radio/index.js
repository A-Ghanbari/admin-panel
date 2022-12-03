import ACL from 'components/ACL'
import { Radio as AntRadio } from "antd"
import "components/utils/field/radio/radio.scss"

function Radio({ options, ...props }) {
    return (
        <AntRadio.Group options={options} {...props} />
    )
}

export default ACL(Radio)