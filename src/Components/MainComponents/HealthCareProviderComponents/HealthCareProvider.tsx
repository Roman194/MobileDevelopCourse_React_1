import React from 'react'
import providerIllustration from './assets/healthCareProviderIllustration.svg'
import Button from '../../ViewComponents/Button'
import Divider from '../../../Components/ViewComponents/Divider'
import appearance from '../textPictureBlocks.module.css'
import { titles } from '../../../common.module.css'


const HealthCareProvider: React.FC = () => {
  return (
    <div className={appearance.row}>
      <img src={providerIllustration} alt="Leading healthcare providers" className={appearance.illustration} />

      <div className={appearance.column}>
        <div className={titles}>
          <h1>Leading healthcare providers</h1>
          <Divider />
          We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver
        </div>

        <Button>Learn more</Button>
      </div>
    </div>
  )
}

export default HealthCareProvider
