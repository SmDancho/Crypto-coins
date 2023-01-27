import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {newsType} from "../../types/data"


export interface dataState {
  isLoading: boolean;
  status: null | string;
  Latestnews: Array<newsType> ; 
  error: string;
  SliderhNews:Array<newsType>
}

const initialState: dataState = {
  isLoading: false,
  status: null,
  Latestnews: [],
  error: '',
  SliderhNews: [],
};

export const fetchNews = createAsyncThunk(
    'dataSlice/fetchNews',

    async () => {
      const options = {
        method: 'GET',
        url: 'https://newsapi.org/v2/everything',
        params: {
            pageSize: "20",
            q:"crypto",
            apiKey:"efc2b9b347e945bdad93937c0d61f1e2",
            sortBy:"relevancy",
            language:'ru'
          }
      }
    
      const data = axios.request(options)
      return data
    },
);

export const fetchSliderNews = createAsyncThunk(
  'dataSlice/fetchSliderNews',

  async () => {
    const options = {
      method: 'GET',
      url: 'https://newsapi.org/v2/everything',
      params: {
          pageSize: "5",
          q:"bitcoin",
          apiKey:"efc2b9b347e945bdad93937c0d61f1e2",
          sortBy:"relevancy",
          language:'ru'
        }
    }
  
    const data = axios.request(options)
    return data
  },
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    //latest news action
    builder.addCase(fetchNews.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.Latestnews = action.payload.data.articles;
    });
    //slider news action

    builder.addCase(fetchSliderNews.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSliderNews.fulfilled, (state, action) => {
      state.SliderhNews  = action.payload.data.articles
    });
  },
});



export default dataSlice.reducer;
