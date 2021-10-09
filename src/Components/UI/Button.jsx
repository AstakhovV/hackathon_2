import React from "react";
import PropTypes from "prop-types";

const Button = ({
    color,
    outlined,
    size,
    isRounded,
    type,
    onClick,
    children,
    className,
    style,
}) => {
    const btnClasses = () => {
        const cls = ["btn"];
        if (size) cls.push(`btn-${size}`);
        if (!isRounded) cls.push("rounded-0");
        if (color) {
            cls.push(`btn-${outlined ? "outline-" : ""}${color}`);
        }
        if (className) cls.push(className);
        return cls.join(" ");
    };
    return (
        <button
            style={style}
            type={type || "button"}
            onClick={onClick}
            className={btnClasses()}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    isRounded: true,
    outlined: false,
    onClick: () => {},
};

Button.propTypes = {
    color: PropTypes.string,
    outlined: PropTypes.bool,
    size: PropTypes.string,
    isRounded: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    onClick: PropTypes.func.isRequired,
};

export default Button;
