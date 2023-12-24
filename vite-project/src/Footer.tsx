import React from 'react'

import footerLogo from './assets/footerLogo.svg'

interface footFunction{
    chapterName: string,
    elements: string[]
}

interface footFunctions{
    footFunctions: footFunction[]
}

const Footer: React.FC<footFunctions> = ({footFunctions}) =>{
    return(
        <div className='Footer'>
            <img src={footerLogo} alt="Health Care"/>
            <h6>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</h6>
            <h6>©HealthCare PTY LTD 2023. All rights reserved</h6>
            {
                footFunctions.map((item, index) => 
                    <div className='Chapter'>
                        <h3>{footFunctions[index].chapterName}</h3>
                        {
                            footFunctions[index].elements.map((item, elIndex) =>
                                <div>
                                    <h4>{footFunctions[index].elements[elIndex]}</h4>
                                </div>
                            )
                        }
                    </div>
                )
            }
            
        </div>
    );
};

export default Footer;