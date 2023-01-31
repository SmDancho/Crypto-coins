import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Exchanges} from "../../types/data"


export interface dataState {
  isLoading: boolean;
  status: null | string;
  exchanges: Array<Exchanges> ; 
  error: string;

}

const initialState: dataState = {
  isLoading: false,
  status: null,
  exchanges: [],
  error: '',

};

export const fetchExchangesData = createAsyncThunk(
    'dataSlice/fetchExchangesData',

    async () => {
        const options = {
            method: 'GET',
            url: 'https://coingecko.p.rapidapi.com/exchanges',
            params: {per_page: '20'},
            headers: {
              'X-RapidAPI-Key': 'd7a164b038msh166c9b02c00e56dp1a4b46jsn86b5659ae3c6',
              'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
            }
          };
      const data = axios.request(options)
      return data
    },
);



export const exchangesSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    builder.addCase(fetchExchangesData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExchangesData.fulfilled, (state, action) => {
      state.exchanges = action.payload.data;
    });
    
  },
});



export default exchangesSlice.reducer;
