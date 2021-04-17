import React, { useState } from 'react';
import { Burger } from './burger';
import { Menu } from '../menu/menu';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
    const { t } = useTranslation('navigation');
    const [openMenu, setOpenMenu] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const navItems = [
        {
            name: t('home'),
            link: 'home',
            offset: -76
        },
        {
            name: t('about'),
            link: 'about',
            offset: -70
        },
        {
            name: t('resume'),
            link: 'resume',
            offset: -65
        },
        {
            name: t('projects'),
            link: 'projects',
            offset: -65
        },
        {
            name: t('contact'),
            link: 'contact',
            offset: -65
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
            { openMenu && <Menu items={navItems} changeMenu={changeMenu} NavItems={NavItems} isClosing={isClosing} /> }
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
                            <Link className={`${classBlock}__link`} activeClass={selectedClass} to={item.link} spy={true} smooth={true} offset={item.offset} duration={500} onClick={changeMenu ? () => changeMenu() : null} >{item.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}