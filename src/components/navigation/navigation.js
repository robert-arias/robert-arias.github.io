import React, { useState } from 'react';
import { Burger } from './burger';
import { Menu } from '../menu/menu';

export default function Navigation() {
    const [openMenu, setOpenMenu] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
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

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const changeMenu = async () => {
        if(!openMenu) {
            setOpenMenu(!openMenu);
        }
        else {
            setIsClosing(true);
            await delay(800);
            setOpenMenu(!openMenu);
            setIsClosing(false);
        }
    };

    return (
        <nav className='nav'>
            <Burger type='button' onClick={() => changeMenu()} />
            <NavItems items={navItems} classBlock='nav' />
            { openMenu ? (<Menu items={navItems} changeMenu={changeMenu} NavItems={NavItems} isClosing={isClosing} />) : null }
        </nav>
    );
}

/* This is the items for the desktop version */
function NavItems({ items, classBlock, changeMenu = null }) {
    const selectedClass = `${classBlock}__link--selected`;
    return (
        <ul className={`${classBlock}__list`}>
            {
                items.map((item, index) => {
                    return (
                        <li key={index.toString()} className={`${classBlock}__item`}>
                            <a href={item.link} className={`${classBlock}__link ${item.isSelected ? selectedClass : null }`} onClick={ changeMenu ? () => changeMenu() : null}>{item.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
}