import React from 'react';
import {Link, useLocation} from "react-router-dom";
import './Navbar.scss'
import {links} from '../../constants/links'

const NavBar = () => {
    const {pathname} = useLocation()
    const activeLink = pathname.split('/')[1]
    return (
        <ul className="nav navbar-dark bg-primary">
            {
                links.map(link => (
                    <li key={link.id} className="nav-item">
                        <Link className='nav-link'
                              to={link.path}>
                            <p className={`nav__item-link ${activeLink === link.path.slice(1) ? 'active' : ''}`}>{link.name}</p>
                        </Link>
                    </li>

                ))
            }
        </ul>
    );
};

export default NavBar;