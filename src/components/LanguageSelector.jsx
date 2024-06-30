import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentLanguage } from '../features/articles/articleSlice';

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setCurrentLanguage(language));
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('fr')}>French</button>
    </div>
  );
};

export default LanguageSelector;
