import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articleSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;
