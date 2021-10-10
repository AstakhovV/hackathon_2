import React from "react";

const Slide = ({children, isActive}) => {
    return <div className={`slider-item ${isActive ? "active" : ""}`}>{children}</div>;
};

export default Slide;
