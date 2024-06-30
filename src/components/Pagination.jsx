import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../features/articles/articleSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalResults, currentCategory } = useSelector((state) => state.articles);
  const totalPages = Math.ceil(totalResults / 10);

  const handlePageChange = (page) => {
    dispatch(getArticles({ category: currentCategory, page }));
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={index + 1 === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
