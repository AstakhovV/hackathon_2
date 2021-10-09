import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../constants/links";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow navbar-dark bg-primary">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    {links.map((link) => (
                        <li key={link.id} className="nav-item">
                            <NavLink
                                exact
                                activeClassName="active"
                                className="nav-link"
                                aria-current="page"
                                to={link.path}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
