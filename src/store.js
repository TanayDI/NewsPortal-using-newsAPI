import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './features/articles/articleSlice';

const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});

export default store;
