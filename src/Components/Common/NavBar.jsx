import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import './Navbar.css'

const NavBar = () => {
    const [navLink] = useState([
        {id: 1, name: 'Home', path: '/'},
        {id: 2, name: 'Users', path: '/users'},
        {id: 3, name: 'Favorites', path: '/favorites'}
    ])
    const {pathname} = useLocation()
    const activeLink = pathname.split('/')[1]
    return (
        <ul className="nav navbar-dark bg-primary">
            {
                navLink.map(link => (
                    <li className="nav-item">
                        <Link key={link.id}
                              className='nav-link'
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