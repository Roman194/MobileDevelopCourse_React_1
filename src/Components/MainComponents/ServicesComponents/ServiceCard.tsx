import React from 'react'
import appearance from './ServiceCard.module.css'

interface card{
    title: string,
    subtitle: string,
    serviceLogo: string
}

interface cards{
    cards:card[]
}

const ServiceCard: React.FC<cards> = ({cards}) =>{
    return(        
        <div className={appearance.card}>
            {cards.map((item, index) =>
                <div className={appearance.subCard} key={index}>
                    <img src={cards[index].serviceLogo} alt={cards[index].title}/>
                    <h1 className={appearance.h1}>{cards[index].title}</h1>
                    <h2 className={appearance.h2}>{cards[index].subtitle}</h2>
                </div>
            )}
        </div>
    );
};

export default ServiceCard;
