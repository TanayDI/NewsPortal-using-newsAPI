import React from 'react';
import './styles.css'; 

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="image-wrapper">
        <img src={article.urlToImage} alt={article.title} />
      </div>
      <div className="content">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
