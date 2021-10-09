import React from "react";
import PropTypes from "prop-types";

const Socials = ({ socials }) => {
    return (
        <>
            <h5>Мои социальные сети:</h5>
            <ul className="m-0 p-0" style={{listStyle: 'none'}}>
                {socials.map((social) => (
                    <li key={social}>
                        <a href={social}>{social}</a>
                    </li>
                ))}
            </ul>
        </>
    );
};

Socials.propTypes = {
    socials: PropTypes.array.isRequired,
};

export default Socials;
