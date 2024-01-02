import React from 'react'
import Appearence from './ArticleCard.module.css'

interface article{
    title: string,
    subtitle: string,
    image: string
}

interface Articles{
    arrt: article[]
}

const ArticleCard: React.FC<Articles> = ({arrt}) =>{
    return(
        <div className={Appearence.row}>
            <img className={Appearence.dotsLeft} src='Dots'/>
            {arrt.map((item, index) => 
            <div className={Appearence.article}>
                <img className={Appearence.img} src={arrt[index].image} alt="Article image"/>
                <h1 className={Appearence.h1}>{arrt[index].title}</h1>
                <h2 className={Appearence.h2}>{arrt[index].subtitle}</h2>
                <button className={Appearence.moreBut}>Read more ➜</button>
            </div>
                )
            }
        </div>
    );
};

export default ArticleCard;