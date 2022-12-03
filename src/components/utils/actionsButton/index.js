import "components/utils/actionsButton/actionButton.scss"

function ActionButton({ position, children }) {
    return (
        <div className={`action-button ${position}`}>
            {children}
        </div>
    )
}

export default ActionButton