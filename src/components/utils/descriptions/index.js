import { Descriptions as AntDescriptions } from "antd"
import "components/utils/descriptions/descriptions.scss"

function Descriptions({ data, column = { xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 } }) {
    return (
        <AntDescriptions
            title={data.title}
            bordered
            column={column}
        >
            {data.map((item, index) => {
                return (
                    <AntDescriptions.Item
                        className={item.style}
                        key={index} label={item.label}
                    >
                        {item.text}
                    </AntDescriptions.Item>
                )
            })}
        </AntDescriptions>
    )
}
export default Descriptions