import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const location = useLocation();
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    const activeMenu = () => {
        if (location.pathname.startsWith('/about')) return 'about';
        if (location.pathname.startsWith('/portfolio') || location.pathname.startsWith('/project')) return 'work';
        if (location.pathname.startsWith('/contact')) return 'contact';
        return 'home';
    };

    const menu = activeMenu();

    return (
        <div className='navbar'>
            <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="Open menu" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt="Close menu" />
                <li>
                    <Link className='anchor-link' to='/' onClick={closeMenu}><p>Home</p></Link>
                    {menu === "home" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <Link className='anchor-link' to='/about' onClick={closeMenu}><p>About Me</p></Link>
                    {menu === "about" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <Link className='anchor-link' to='/portfolio' onClick={closeMenu}><p>Portfolio</p></Link>
                    {menu === "work" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <Link className='anchor-link' to='/contact' onClick={closeMenu}><p>Contact</p></Link>
                    {menu === "contact" ? <img src={underline} alt="" /> : <></>}
                </li>
            </ul>
            <div className="nav-connect">
                <Link className='anchor-link' to='/contact'>Connect With Me</Link>
            </div>
        </div>
    );
};

export default Navbar;