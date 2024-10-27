export default function LogicSidebar(
    {
        navOpen, scrollbarVisible, onScrollCB, onMouseEnterCB, onMouseMoveCB, children
    }
) {
    return (
        <div
            className={
                `sidebar ${navOpen ? '' : 'closed'} ${scrollbarVisible ? 'scrollbar-visible' : ''}`
            }
            onScroll={onScrollCB}
            onMouseEnter={onMouseEnterCB}
            onMouseMove={onMouseMoveCB}
        >
            {children}
        </div>
    )
}