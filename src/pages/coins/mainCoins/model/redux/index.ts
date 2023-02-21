import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Icoins } from '../../../../../shared/model/types/global'

export interface dataState {
  isLoading: boolean
  status: null | string
  coins: Array<Icoins>
  error: string
}

const initialState: dataState = {
  isLoading: false,
  status: null,
  coins: [],
  error: '',
}

export const fetchCoinsData = createAsyncThunk(
  'dataSlice/fetchCoinsData',

  async () => {
    const params = {
      timePeriod: '24h',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '20',
      offset: '0'
    }
    const query = new URLSearchParams(params) // create  query string
    const data = axios.get(`http://localhost:5000/coins/getAllCoins/?${query}`)
    return data
  }
)

export const coinsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoinsData.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchCoinsData.fulfilled, (state, action) => {
      state.coins = action.payload.data.data.coins
    })
  }
})

export default coinsSlice.reducer
