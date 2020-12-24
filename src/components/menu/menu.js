/* Menu for mobile version */
export function Menu({ items, changeMenu, NavItems, isClosing }) {
    return (
        <div className='menu-wrapper'>
            <div className={`menu ${isClosing ? `scale-out-tr` : `scale-in-tr`}`}>
                <div className='menu-closeWrapper'>
                    <button className='menu__closeBtn' type='button' onClick={() => changeMenu()}>
                        <svg className='menu__closeImg' stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className='menu-listWrapper'>
                    <NavItems items={items} classBlock='menu' changeMenu={changeMenu} />
                </div>
            </div>
        </div>
    );
}