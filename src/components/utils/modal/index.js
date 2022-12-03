import { Modal as AntModal } from 'antd'
import "components/utils/modal/modal.scss"

export default function Modal({ children, footer, handleCancel, handleChange, ...props }) {

    return (
        <div
            onMouseDown={(e) => e.stopPropagation()}
            onDoubleClick={(e) => e.stopPropagation()}
        >
            <AntModal
                centered
                closable={false}
                footer={footer}
                {...props}
            >
                {children}
            </AntModal>
        </div>
    )
}