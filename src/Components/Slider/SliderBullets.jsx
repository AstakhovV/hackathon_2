import React from "react";
import PropTypes from 'prop-types'

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
SliderBullets.propTypes = {
    onSlideChoose: PropTypes.func.isRequired,
    itemsCount: PropTypes.number.isRequired,
    activeIndex: PropTypes.number.isRequired
}
export default SliderBullets;
