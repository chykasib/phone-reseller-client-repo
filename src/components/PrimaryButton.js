import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button type='submit' className="btn btn-primary bg-gradient-to-r from-cyan-500 to-primary">{children}</button>
    );
};

export default PrimaryButton;