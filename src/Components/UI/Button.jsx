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
}) => {
    const btnClasses = () => {
        const cls = ["btn"];
        if (size) cls.push(`btn-${size}`);
        if (!isRounded) cls.push('rounded-0');
        if(color) {
            cls.push(`btn-${outlined ? "outline-" : ''}${color}`)
        }
        return cls.join(' ')
    };
    return (
        <button
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
    onClick: () => {}
}

Button.propTypes = {
    color: PropTypes.string,
    outlined: PropTypes.bool,
    size: PropTypes.string,
    isRounded: PropTypes.bool,
    type: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    onClick: PropTypes.func.isRequired,
};

export default Button;
