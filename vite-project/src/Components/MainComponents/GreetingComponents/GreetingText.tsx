import React from 'react'
import appearence from './GreetingText.module.css'
import PrimaryButton from '../../ViewComponents/PrimaryButton';


const GreetingText: React.FC = () =>{
    return(
        <div className={appearence.column}>
            <h1>Virtual healthcare for you</h1>
            <h2>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</h2>
            <PrimaryButton text= {'Consult today'} />
            
        </div>
    );
};

export default GreetingText;