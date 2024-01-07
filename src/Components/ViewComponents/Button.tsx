import React from 'react'
import appearance from './button.module.css'

interface ButtonArgs {
    primary: boolean
    children: React.ReactNode
}

const Button: React.FC<any> = ({primary, children}) => {
    const className = appearance.button + ' ' + (primary ? appearance.primary : '')

    return (
        <button className={className}>
            {children}
        </button>
    );
};

export default Button;
