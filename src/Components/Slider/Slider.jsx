import React, { useState } from "react";
import PropTypes from 'prop-types'
import "../../css/Slider.scss";
import SliderBtn from "./SliderBtn";
import SliderBullets from "./SliderBullets";
import Slide from "./Slide";

const Slider = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const nextSlide = () => {
        if (activeIndex < children.length) {
            setActiveIndex(activeIndex + 1);
        } else {
            setActiveIndex(1);
        }
    };

    const prevSlide = () => {
        if (activeIndex === 1) {
            setActiveIndex(children.length);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };

    const chooseSlide = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className="slider">
            <div className="slider-container">
                {children.map((child, index) => (
                    <Slide
                        isActive={activeIndex === index + 1}
                        key={index}>
                        {child.props.children}
                    </Slide>
                ))}
            </div>
            <SliderBtn onClick={prevSlide} direction="prev" />
            <SliderBtn onClick={nextSlide} direction="next" />
            <SliderBullets
                onSlideChoose={chooseSlide}
                itemsCount={children.length}
                activeIndex={activeIndex}
            />
        </div>
    );
};

Slider.propTypes = {
    children: PropTypes.array
}

export default Slider;
