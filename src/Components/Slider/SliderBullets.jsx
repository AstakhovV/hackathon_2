import React from "react";

const SliderBullets = ({onSlideChoose, itemsCount, activeIndex }) => {
    const items = new Array(itemsCount).fill(null).map((_, id) => id + 1)
    return (
        <div className="slider-bullets">
            {items.map(index => (
                <div onClick={() => onSlideChoose(index)} key={index} className={`slider-bullet ${activeIndex === index ? 'active': ''}`} />
            ))}
        </div>
    );
};

export default SliderBullets;
