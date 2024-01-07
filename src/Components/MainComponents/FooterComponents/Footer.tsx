import React from 'react'
import footerLogo from './assets/footerLogo.svg'
import appearance from './Footer.module.css'

interface footFunction{
  chapterName: string,
  elements: string[]
}

interface footFunctions{
  footFunctions: footFunction[]
}

const Footer: React.FC<footFunctions> = ({footFunctions}) =>{
  return(
    <footer className={appearance.row}>
      <div className={appearance.column}>
        <img src={footerLogo} alt="Health Care" />
        <div className={appearance.text_description}>
        HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone
        </div>
        <div className={appearance.text_rights}>
          ©HealthCare PTY LTD 2023. All rights reserved
        </div>
      </div>
      {
        footFunctions.map((item, index) => 
          <div key={index}>
            <h3>{footFunctions[index].chapterName}</h3>
            {
              footFunctions[index].elements.map((item, elIndex) =>
                <div key={elIndex}>
                  <h4>{footFunctions[index].elements[elIndex]}</h4>
                </div>
              )
            }
          </div>
        )
      }
    </footer>
  );
};

export default Footer;
