import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from 'shared'
import { Icoins } from 'shared'

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
    const params = { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: timePeriod  , coinId , 
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '20',
    offset: '0'}
    const query = new URLSearchParams(params)
    const data = instance.get(`/coins/CurrentCoinPrice/?${query}`)
    return data
  }
)
const currentCoinSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(currentCoinInfo.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(currentCoinInfo.fulfilled, (state, action) => {
      state.coin = action.payload.data.data.coin
      state.isLoading = false
    })
  }
})

export default currentCoinSlice.reducer
