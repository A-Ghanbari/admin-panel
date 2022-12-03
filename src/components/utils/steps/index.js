import ACL from 'components/ACL'
import { Steps as AntSteps } from 'antd'
import useWindowSize from 'hooks/useWindowSize'
import "components/utils/steps/steps.scss"

const { Step } = AntSteps

function Steps({ items, current, ...props }) {
    const { width } = useWindowSize()
    return (
        <AntSteps current={current} labelPlacement="vertical" {...props}>
            {items.map((step) => (
                <Step
                    key={step.title}
                    title={width > 991 ? step.title : null}
                />
            ))}
        </AntSteps>
    )
}

export default ACL(Steps)