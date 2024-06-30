import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();
  const articles = useSelector((state) => state.articles.articles);
  const article = articles.find((article) => article.publishedAt === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
