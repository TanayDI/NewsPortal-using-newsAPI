import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '3feaa62dc9bb4c24b5a632c1e9404ee9'; 

const initialState = {
  articles: [],
  isLoading: false,
  error: null,
  category: 'general',
  language: 'en', 
};

// Fetch articles thunk
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (language, { getState }) => {
    const { category } = getState().articles;
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          sources: '',
          category: category,
          apiKey: API_KEY,
          language: language, 
        },
      });
      return response.data.articles;
    } catch (error) {
      throw Error('Failed to fetch articles');
    }
  }
);

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      state.category = action.payload;
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

export const { setCurrentCategory } = articleSlice.actions;

export default articleSlice.reducer;
