import React from 'react'
import appearance from './ArticleCard.module.css'

interface article {
  title: string,
  subtitle: string,
  image: string
}

const ArticleCard: React.FC<Articles> = ({article}) =>{
  return(
    <div className={appearance.article}>
      <img src={article.image} alt="Article image"/>
      <div className={appearance.articleDescription}>
        <div className={appearance.articleInfo}>
          <h2 className={appearance.h1}>{article.title}</h2>
          {article.subtitle}
        </div>
        <button className={appearance.moreBut}>Read more ➜</button>
      </div>
    </div>
  );
};

export default ArticleCard;