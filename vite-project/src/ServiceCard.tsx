import React from 'react'

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
        
        <div className='Card'>
            {
            cards.map((item, index) =>

            <div>
                <img src={cards[index].serviceLogo} alt={cards[index].title}/>
                <h1>{cards[index].title}</h1>
                <h2>{cards[index].subtitle}</h2>
            </div>

            )
            }
        </div>
        
    );

};

export default ServiceCard;
