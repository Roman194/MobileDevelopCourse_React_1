import React from 'react'
import appearance from './ServiceCard.module.css'

interface card {
    title: string,
    subtitle: string,
    serviceLogo: string
}

const ServiceCard: React.FC<cards> = ({card}) =>{
    return (
        <div className={appearance.card}>
            <img src={card.serviceLogo} alt={card.title}/>
            <div className={appearance.description}>
                <h2>{card.title}</h2>
                {card.subtitle}
            </div>
        </div>
    );
};

export default ServiceCard;
