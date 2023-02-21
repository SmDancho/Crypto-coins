import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Exchanges } from '../types'

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
    const options = {
      method: 'GET',
      url: `http://localhost:5000/exchanges/getAllexchanges/?${query}`
    }
    const data = axios.request(options)
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
    })
  }
})

export default exchangesSlice.reducer
