import React from 'react'
import appearence from './MobileApps.module.css'
import appIllustration from './assets/mobileAppIllustration.svg'
import BorderButton from './PrimaryOnlyBorderButton'

const MobileApps: React.FC = () =>{
    return(
        <div className={appearence.row}>
            <div className={appearence.column}>

                <h1>Download our mobile apps</h1>
                <h2>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</h2>
          
                <BorderButton text='Download  🠗'/>
            </div>
            <div className={appearence.img}>
                <img src={appIllustration} alt='Download our mobile apps'/>
            </div>
        </div>
    );
};

export default MobileApps;