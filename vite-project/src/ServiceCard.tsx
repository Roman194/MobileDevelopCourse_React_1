import React from 'react'
import appearence from './ServiceCard.module.css'

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
        
        <div className={appearence.card}>
            {
            cards.map((item, index) =>

            <div className={appearence.subCard}>
                <img src={cards[index].serviceLogo} alt={cards[index].title}/>
                <h1 className={appearence.h1}>{cards[index].title}</h1>
                <h2 className={appearence.h2}>{cards[index].subtitle}</h2>
            </div>

            )
            }
        </div>
        
    );

};

export default ServiceCard;
