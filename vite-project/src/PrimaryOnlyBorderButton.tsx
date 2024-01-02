import React from 'react'
import appearence from './PrimaryOnlyBorderButton.module.css'

interface buttonText{
    text: string
}

const PrimaryOnlyBorderButton: React.FC<buttonText> = ({text}) =>{
    return(
        <button className={appearence.borderButton}>
            {text}
        </button>
    );
};

export default PrimaryOnlyBorderButton;