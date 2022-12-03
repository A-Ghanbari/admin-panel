import { Rate as AntRate } from "antd"
import "components/utils/rate/rate.scss"

export default function Rate({ value, ...props }) {
    return (
        <AntRate
            disabled
            defaultValue={value}
            {...props}
        />
    )
}
