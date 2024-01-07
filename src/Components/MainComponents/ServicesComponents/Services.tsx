import React from 'react'
import ServiceCard from './ServiceCard'
import appearance from './Services.module.css'
import { titlesCenter } from '../../../common.module.css'
import Divider from '../../ViewComponents/Divider'
import Button from '../../ViewComponents/Button'
import illustration from './assets/illustration.svg'


interface card {
  title: string,
  subtitle: string,
  serviceLogo: string
}

interface cards {
  cards: card[]
}

const Services:React.FC<cards> = ({cards}) => {
  return (
    <div className={appearance.main}>
      <div className={titlesCenter}>
        <h1 className={appearance.textCenter}>Our services</h1>
        <Divider />
        <div className={appearance.textCenter}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</div>
      </div>
      <div className={appearance.cards}>
        <img src={illustration} className={appearance.illustration} />
        {cards.map((card, index) =>
          <ServiceCard card={card} key={index} />
        )}
      </div>
      <Button>Learn more</Button>
    </div>
  );
};

export default Services;