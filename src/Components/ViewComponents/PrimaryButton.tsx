import React from 'react'
import appearance from './PrimaryButton.module.css'

interface buttonText{
    text: string
}
const PrimaryButton: React.FC<buttonText> = ({text}) =>{
    return(
        <button className={appearance.primaryButton}>
            {text}
        </button>
    );
};

export default PrimaryButton;