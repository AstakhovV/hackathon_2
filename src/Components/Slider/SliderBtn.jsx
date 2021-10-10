import React from "react";

const SliderBtn = ({ onClick, direction }) => {
    return (
        <div
            onClick={onClick}
            className={`slider-btn ${direction === "next" ? "next" : "prev"}`}
        />
    );
};

export default SliderBtn;
