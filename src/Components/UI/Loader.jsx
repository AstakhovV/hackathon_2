import React from "react";

const Loader = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{borderWidth: '0.5rem', marginTop: '10rem',width: 120, height: 120}} role="status" />
        </div>
    );
};

export default Loader;
