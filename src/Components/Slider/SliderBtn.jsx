import React from "react";
import PropTypes from 'prop-types'


const SliderBtn = ({ onClick, direction }) => {
    return (
        <div
            onClick={onClick}
            className={`slider-btn ${direction === "next" ? "next" : "prev"}`}
        />
    );
};
SliderBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
    direction: PropTypes.string.isRequired
} 
export default SliderBtn;
