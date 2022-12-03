export default function useDraggableScroll(ref, options = { direction: 'both' }) {

    const { direction } = options
    let initialPosition = { scrollTop: 0, scrollLeft: 0, mouseX: 0, mouseY: 0 }

    const mouseMoveHandler = (event) => {
        if (ref.current) {
            const differencesX = event.clientX - initialPosition.mouseX
            const differencesY = event.clientY - initialPosition.mouseY
            if (direction !== 'horizontal')
                ref.current.scrollTop = initialPosition.scrollTop - differencesY
            if (direction !== 'vertical')
                ref.current.scrollLeft = initialPosition.scrollLeft - differencesX
        }
    }

    const mouseUpHandler = () => {
        if (ref.current) ref.current.style.cursor = 'grab'
        document.removeEventListener('mousemove', mouseMoveHandler)
        document.removeEventListener('mouseup', mouseUpHandler)
    }

    const onMouseDown = (event) => {
        if (ref.current) {
            initialPosition = {
                scrollLeft: ref.current.scrollLeft,
                scrollTop: ref.current.scrollTop,
                mouseX: event.clientX,
                mouseY: event.clientY,
            }
            ref.current.style.cursor = 'grabbing'
            ref.current.style.userSelect = 'none'
            document.addEventListener('mousemove', mouseMoveHandler)
            document.addEventListener('mouseup', mouseUpHandler)
        }
    }

    return { onMouseDown }
}