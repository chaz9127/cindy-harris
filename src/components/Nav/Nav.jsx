import { useState } from 'react';
import './Nav.scss';

const Nav = () => {
    const [openMobileNav, setOpenMobileNav] = useState(false);

    const links = [
        {
            title: 'Home',
            path: 'root',
        },
        {
            title: 'Books',
            path: 'books',
        },
        {
            title: 'Author',
            path: 'about',
        },
    ]

    const toggleMobileNav = () => {
        setOpenMobileNav(!openMobileNav);
    }

    const activeClass = (path) => {
        const hash = window.location.hash.split('#')[1];
        const isActive = (hash === path) || (!hash && path === 'root');

        return isActive ? 'active' : '';
        
    }
    return (
        <nav>
            <h1 className="logo">Cindy Harris</h1>
            <ul className="links">
                {links.map(link => {
                    return (
                        <li key={link.path} className={`link ${activeClass(link.path)}`}>
                            <a href={`#${link.path}`}>{link.title}</a>
                        </li>
                    );
                })}
            </ul>
            <div onClick={toggleMobileNav} className="hamburger-menu">
                <i className="fa-solid fa-bars"></i>
            </div>
            
            {openMobileNav && (
                <div className="mobile-nav">
                    <div className="mobile-nav-body">  
                        <div onClick={toggleMobileNav} className="close-container">
                            <i className="fa-solid fa-x"></i>
                        </div>
                        <ul>
                            {links.map(link => {
                                return (
                                    <li onClick={toggleMobileNav} key={link.path} className={`link ${activeClass(link.path)}`}>
                                        <a href={`#${link.path}`}>{link.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Nav;