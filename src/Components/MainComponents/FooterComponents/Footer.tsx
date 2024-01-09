import React from 'react'
import footerLogo from './assets/footerLogo.svg'
import appearance from './Footer.module.css'

interface footFunction {
  chapterName: string,
  elements: string[]
}

interface footFunctions {
  footFunctions: footFunction[]
}

const Footer: React.FC<footFunctions> = ({footFunctions}) => {
  return (
    <footer className={appearance.footer}>
      <div className={appearance.footerContent}>
        <div className={appearance.info}>
          <img src={footerLogo} alt="Health Care" className={appearance.logo} />
          <div className={appearance.textDescription}>
            HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone
          </div>
          <div className={appearance.textRights}>
            ©HealthCare PTY LTD 2023. All rights reserved
          </div>
        </div>
        <div className={appearance.columns}>
          {
            footFunctions.map((item, index) => 
              <div key={index} className={appearance.column}>
                <h2>{footFunctions[index].chapterName}</h2>
                {
                  footFunctions[index].elements.map((item, elIndex) =>
                    <div key={elIndex}>
                      {footFunctions[index].elements[elIndex]}
                    </div>
                  )
                }
              </div>
            )
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
