import React from 'react'
import ServiceCard from './ServiceCard'
import appearance from './Services.module.css'
import Divider from '../../ViewComponents/Divider'
import BorderButton from '../../ViewComponents/PrimaryOnlyBorderButton'


interface card{
    title: string,
    subtitle: string,
    serviceLogo: string
}

interface cards{
    cards:card[]
}

const Services:React.FC<cards> = ({cards}) =>{
    return(
        <div className={appearance.main}>
          <h1 className={appearance.h1}>Our services</h1>
          <h2 className={appearance.h2}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</h2>
          <Divider />
          <div className={appearance.cards}>
            <ServiceCard cards={cards}/>
          </div>
          <BorderButton text='Learn more'/>
        </div>
    );
};

export default Services;