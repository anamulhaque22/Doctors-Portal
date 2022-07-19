import React from 'react';

const Button = ({children}) => {
    return (
        <>
            <button className="btn gradient-bg text-white border-0 font-bold">{children}</button>
        </>
    );
};

export default Button;