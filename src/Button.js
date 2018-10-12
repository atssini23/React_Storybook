import React from 'react';

const Button = ({bg, children }) => (
    <button style={{backgroundColor: bg}}>{children}</button>
);

export default Button; {/* without this you wont be able to use this anywhere else */}