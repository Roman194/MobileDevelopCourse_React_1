import React from 'react'
import providerIllustration from './assets/healthCareProviderIllustration.svg'
import BorderButton from './PrimaryOnlyBorderButton'
import appearence from './HealthCareProvider.module.css'

const HealthCareProvider: React.FC = () =>{
    return(
        <div className={appearence.row}>
            <div className={appearence.img}>
                <img src={providerIllustration} alt='Leading healthcare providers'/>
            </div>

          <div className={appearence.column}>

          <h1>Leading healthcare providers</h1>
          <h2>We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver</h2>

          <BorderButton text='Learn more'/>
          </div>
        </div>
    );
};

export default HealthCareProvider;