import React from 'react'
import appearance from './ArticleCard.module.css'

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
        <div className={appearance.row}>
            <img className={appearance.dotsLeft} src='Dots'/>
            {arrt.map((item, index) => 
            <div className={appearance.article}>
                <img className={appearance.img} src={arrt[index].image} alt="Article image"/>
                <h1 className={appearance.h1}>{arrt[index].title}</h1>
                <h2 className={appearance.h2}>{arrt[index].subtitle}</h2>
                <button className={appearance.moreBut}>Read more ➜</button>
            </div>
                )
            }
        </div>
    );
};

export default ArticleCard;