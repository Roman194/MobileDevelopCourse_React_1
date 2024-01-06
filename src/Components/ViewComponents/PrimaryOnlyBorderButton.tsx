import React from 'react'
import appearance from './PrimaryOnlyBorderButton.module.css'

interface buttonText{
    text: string
}

const PrimaryOnlyBorderButton: React.FC<buttonText> = ({text}) =>{
    return(
        <button className={appearance.borderButton}>
            {text}
        </button>
    );
};

export default PrimaryOnlyBorderButton;