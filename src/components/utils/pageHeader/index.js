import { PageHeader as AntPageHeader } from 'antd'
import "components/utils/pageHeader/pageHeader.scss"

function PageHeader({ children, ...props }) {
    return (
        <AntPageHeader
            className="page-header"
            {...props}
        >
            {children}
        </AntPageHeader>
    )
}

export default PageHeader