import useWindowSize from "hooks/useWindowSize"
import Card from "components/utils/card"
import { Col } from "components/utils/grid"
import "components/utils/widgetCard/widgetCard.scss"

export default function WidgetCard({ title, actions, des, children, ...props }) {
    const { width } = useWindowSize()
    const widgetCol = {
        sm: width <= 670 ? 24 : 12,
        md: width <= 860 ? 24 : 12,
        lg: 12,
        xl: 8,
        xxl: 6
    }

    return (
        <Col {...widgetCol}>
            <div className="widget-card">
                <Card
                    title={title}
                    actions={actions}
                    {...props}
                >
                    <div className="accent-box">{des}</div>
                    {children}
                </Card>
            </div>
        </Col>
    )
}
