import React from 'react'
import mobileAppIllustration from './assets/mobileAppIllustration.svg'
import Button from '../../ViewComponents/Button'
import Divider from '../../../Components/ViewComponents/Divider'
import appearance from '../textPictureBlocks.module.css'
import { titles } from '../../../common.module.css'


const MobileApps: React.FC = () => {
  return (
    <div className={appearance.row}>
      <div className={appearance.column}>
        <div className={titles}>
          <h1>Download our mobile apps</h1>
          <Divider />
          Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely
        </div>

        <Button>Learn more</Button>
      </div>

      <img src={mobileAppIllustration} alt="Download our mobile apps" className={appearance.illustration} />
    </div>
  )
}

export default MobileApps
