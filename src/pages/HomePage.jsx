import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../features/articles/articleSlice';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, isLoading, error, category } = useSelector(state => state.articles);
  const language = useSelector(state => state.articles.language); 

  useEffect(() => {
    dispatch(fetchArticles(language)); 
  }, [dispatch, category, language]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="homepage">
      {articles.map(article => (
        <div key={article.url} className="article">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
          <br />
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
