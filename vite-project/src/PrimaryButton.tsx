import React from 'react'
import appearence from './PrimaryButton.module.css'

interface buttonText{
    text: string
}
const PrimaryButton: React.FC<buttonText> = ({text}) =>{
    return(
        <button className={appearence.primaryButton}>
            {text}
        </button>
    );
};

export default PrimaryButton;