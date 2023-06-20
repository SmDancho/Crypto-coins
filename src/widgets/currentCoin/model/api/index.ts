import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Icoins } from 'shared/model/types/global'

export interface currentCoinInfoState {
  isLoading: boolean
  status: null | string
  coin: Icoins | null
  error: string
}

const initialState: currentCoinInfoState = {
  isLoading: false,
  status: null,
  coin: null,
  error: ''
}

export const currentCoinInfo = createAsyncThunk(
  'currentCoin/currentCoinInfo',

  async ({ coinId, timePeriod }: { coinId: string; timePeriod: string }) => {
    const options = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
      params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: timePeriod },
      headers: {
        'X-RapidAPI-Key': 'd7a164b038msh166c9b02c00e56dp1a4b46jsn86b5659ae3c6',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    }
    const data = axios.request(options)
    return data
  }
)
const currentCoinSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(currentCoinInfo.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(currentCoinInfo.fulfilled, (state, action) => {
      state.coin = action.payload.data.data.coin
      state.isLoading = false
    })
  }
})

export default currentCoinSlice.reducer
