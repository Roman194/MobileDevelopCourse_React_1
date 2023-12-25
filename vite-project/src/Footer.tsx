import React from 'react'

import footerLogo from './assets/footerLogo.svg'
import appearence from './Footer.module.css'

interface footFunction{
    chapterName: string,
    elements: string[]
}

interface footFunctions{
    footFunctions: footFunction[]
}

const Footer: React.FC<footFunctions> = ({footFunctions}) =>{
    return(
        <div className={appearence.row}>
            <div className={appearence.column}>
                <img src={footerLogo} alt="Health Care"/>
                <div className={appearence.text_description}>
                HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                </div>
                <div className={appearence.text_rights}>
                    ©HealthCare PTY LTD 2023. All rights reserved
                </div>
            </div>
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