import React, { useState } from 'react';
import { Burger } from './burger';

export function Navigation() {
    const [openMenu, setOpenMenu] = useState(false);
    const navItems = [
        {
            name: 'Home',
            link: '#home',
            isSelected: true
        },
        {
            name: 'About me',
            link: '#about',
            isSelected: false
        },
        {
            name: 'Resumé',
            link: '#resume',
            isSelected: false
        },
        {
            name: 'Projects',
            link: '#projects',
            isSelected: false
        },
        {
            name: 'Contact me',
            link: '#contact',
            isSelected: false
        }
    ];

    const changeMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className='nav'>
            <Burger type='button' onClick={() => changeMenu()} />
            <NavItems items={navItems} classBlock='nav' />
            { openMenu ? (<Menu items={navItems} changeMenu={changeMenu} />) : null }
        </nav>
    );
}

/* Menu for mobile version */
function Menu({ items, changeMenu }) {
    return (
        <div className='menu-wrapper'>
            <div className='menu'>
                <div className='menu-closeWrapper'>
                    <button className='menu__closeBtn' type='button' onClick={() => changeMenu()}>
                        <svg className='menu__closeImg' stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className='menu-listWrapper'>
                    <NavItems items={items} classBlock='menu' />
                </div>
            </div>
        </div>
    );
}

/* This is the items for the desktop version */
function NavItems({ items, classBlock }) {
    const selectedClass = `${classBlock}__link--selected`;
    return (
        <ul className={`${classBlock}__list`}>
            {
                items.map((item, index) => {
                    return (
                        <li key={index.toString()} className={`${classBlock}__item`}>
                            <a href={item.link} className={`${classBlock}__link ${item.isSelected ? selectedClass : null }`}>{item.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
}