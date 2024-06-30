import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = import.meta.env.VITE_NEWS_API_KEY;  
const baseUrl = 'https://newsapi.org/v2/top-headlines&apiKey=3feaa62dc9bb4c24b5a632c1e9404ee9';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (category = 'general') => {
    const response = await fetch(`${baseUrl}?category=${category}&apiKey=${apiKey}`);
    const data = await response.json();
    if (response.ok) {
      return data.articles;
    } else {
      throw new Error(data.message);
    }
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    currentCategory: 'general',
    isLoading: false,
    error: null,
  },
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentCategory } = articlesSlice.actions;

export default articlesSlice.reducer;
