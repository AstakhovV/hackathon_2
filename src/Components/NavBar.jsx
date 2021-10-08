import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>

        </ul>
    );
};

export default NavBar;