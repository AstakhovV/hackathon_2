import React from 'react';
import PropTypes from 'prop-types'

const Badge = ({color, content}) => {
    return ( 
        <span className={`badge bg-${color ? color : 'primary'}`}>{content}</span>
     );
}
 
Badge.propTypes = {
    color: PropTypes.string,
    content: PropTypes.string
}
export default Badge;