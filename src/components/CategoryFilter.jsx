import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCategory } from '../features/articles/articleSlice';
import './CategoryFilter.css';

const categories = ['General', 'Business', 'Technology', 'Entertainment', 'Health', 'Science', 'Sports'];

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(setCurrentCategory(category));
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
