import React from 'react'

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
        <div>
            {arrt.map((item, index) => 
            <div className='ArticleCard'>
                <img src={arrt[index].image} alt="Article image"/>
                <h1>{arrt[index].title}</h1>
                <h2>{arrt[index].subtitle}</h2>
                <button>Read more ➜</button>
            </div>
                )
            }
        </div>
    );
};

export default ArticleCard;