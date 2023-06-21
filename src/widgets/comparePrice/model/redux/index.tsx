import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Icoins } from '../../../../shared/model/types'

export interface dataState {
  isLoading: boolean
  status: null | string
  coins: Array<Icoins>
  error: string
  compare: Array<Icoins>
}

const initialState: dataState = {
  isLoading: false,
  status: null,
  coins: [],
  error: '',
  compare: []
}

export const coinsPriceComapareData = createAsyncThunk(
  'dataSlice/fetchPriceData',
  async (coinId: string) => {
    const params = {
      timePeriod: '24h',
      orderDirection: 'desc',
      limit: '20',
      offset: '0',
      coinId
    }
    const query = new URLSearchParams(params) // create params query string
    const data = axios.get(`http://localhost:5000/coins/getPrices/?${query}`)
    return data
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(coinsPriceComapareData.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(coinsPriceComapareData.fulfilled, (state, action) => {
      state.compare = action.payload.data.data.exchanges
      state.isLoading = false
    })
  }
})

export default dataSlice.reducer
