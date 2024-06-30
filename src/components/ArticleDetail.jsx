import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { title } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find((article) => article.title === title)
  );

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
