import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Exchanges } from '../types'
import { instance } from 'shared/utils/axios'

export interface dataState {
  isLoading: boolean
  status: null | string
  exchanges: Array<Exchanges>
  error: string
}

const initialState: dataState = {
  isLoading: false,
  status: null,
  exchanges: [],
  error: ''
}

export const fetchExchangesData = createAsyncThunk(
  'dataSlice/fetchExchangesData',

  async (limit: string) => {
    const params = {
      per_page: limit
    }
    const query = new URLSearchParams(params)
    const data = instance.get(`/exchanges/getAllexchanges/?${query}` )
    return data
  }
)

export const exchangesSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExchangesData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchExchangesData.fulfilled, (state, action) => {
      state.exchanges = action.payload.data
      state.isLoading = false
    })
  }
})

export default exchangesSlice.reducer
