import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from 'shared'
import { Icoins } from 'shared'

export interface dataState {
  isLoading: boolean
  status: null | string
  coins: Icoins[]
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
    const query = new URLSearchParams(params) 
    const data = instance.get(`/coins/getAllCoins/?${query}`)
    return data
  }
)

export const coinsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoinsData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCoinsData.fulfilled, (state, action) => {
      state.coins = action.payload.data.data.coins
    })
  }
})

export default coinsSlice.reducer
