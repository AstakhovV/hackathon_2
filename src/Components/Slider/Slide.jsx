import React from "react";
import PropTypes from 'prop-types'


const Slide = ({children, isActive}) => {
    return <div className={`slider-item ${isActive ? "active" : ""}`}>{children}</div>;
};
Slide.propTypes = {
    isActive: PropTypes.bool,
}
export default Slide;
