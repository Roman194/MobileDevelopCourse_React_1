import React from 'react'
import ServiceCard from './ServiceCard'
import appearence from './Services.module.css'
import Divider from './Divider'
import BorderButton from './PrimaryOnlyBorderButton'


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
        <div className={appearence.main}>
          <h1 className={appearence.h1}>Our services</h1>
          <h2 className={appearence.h2}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</h2>
          <Divider />
          <div className={appearence.cards}>
            <ServiceCard cards={cards}/>
          </div>
          <BorderButton text='Learn more'/>
        </div>
    );
};

export default Services;