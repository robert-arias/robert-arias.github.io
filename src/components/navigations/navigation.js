import React, { useState } from 'react';
import { Burger } from './burger';

export function Navigation() {
    const [openMenu, setOpenMenu] = useState(false);
    const navItems = [
        {
            name: 'Home',
            link: '#home'
        },
        {
            name: 'About me',
            link: '#about'
        },
        {
            name: 'Resumé',
            link: '#resume'
        },
        {
            name: 'Projects',
            link: '#projects'
        },
        {
            name: 'Contact me',
            link: '#contact'
        }
    ];

    const changeMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className='nav'>
            <Burger type='button' onClick={() => changeMenu()} />
            <NavItems items={navItems} classBlock='nav' />
            <Menu items={navItems} />
        </nav>
    );
}

function Menu({ items }) {

    return (
        <div className='menu-wrapper'>
            <div className='menu'>
                <div className='menu-closeWrapper'>
                    <button className='menu__closeBtn'>
                        <svg className='menu__closeImg' stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <NavItems items={items} classBlock='menu' />
                </div>
            </div>
        </div>
    );
}

/* This is the items for the desktop version */
function NavItems({ items, classBlock }) {
    return (
        <ul className={`${classBlock}__list`}>
            {
                items.map((item, index) => {
                    return (
                        <li key={index.toString()} className={`${classBlock}__item`}>
                            <a href={item.link} className="nav__link">{item.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
}