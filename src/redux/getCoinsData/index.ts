import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Icoins} from "../../types/data"


export interface dataState {
  isLoading: boolean;
  status: null | string;
  coins: Array<Icoins> ; // change
  error: string;
}

const initialState: dataState = {
  isLoading: false,
  status: null,
  coins: [],
  error: '',
};

export const fetchCoinsData = createAsyncThunk(
    'dataSlice/fetchCoinsData',

    async () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        headers: {
          'X-RapidAPI-Key': 'd7a164b038msh166c9b02c00e56dp1a4b46jsn86b5659ae3c6',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        },
        params: {
     
          timePeriod: '24h',
          'tiers[0]': '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '20',
          offset: '0'
        },
       
      };
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

    builder.addCase(fetchCoinsData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCoinsData.fulfilled, (state, action) => {
      state.coins = action.payload.data.data.coins;
    });
  },
});



export default dataSlice.reducer;
