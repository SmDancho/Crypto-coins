import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from 'shared'
import { newsType } from '../types'

export interface dataState {
  isLoading: boolean
  status: null | string
  Latestnews: Array<newsType>
  error: string
  SliderhNews: Array<newsType>
}

const initialState: dataState = {
  isLoading: false,
  status: null,
  Latestnews: [],
  error: '',
  SliderhNews: []
}

export const fetchNews = createAsyncThunk(
  'dataSlice/fetchNews',

  async () => {
    const params = {
      pageSize: '20',
      sortBy: 'relevancy',
      language: 'en'
    }
    const query = new URLSearchParams(params)
    const data = instance.get(`/news/Allnews/?${query}`)
    return data
  }
)

export const fetchSliderNews = createAsyncThunk(
  'dataSlice/fetchSliderNews',

  async () => {
    const params = {
      pageSize: '20',
      sortBy: 'relevancy',
      language: 'en'
    }
    const query = new URLSearchParams(params)
    const data = instance.get(`/news/sliderNews/?${query}`)
    return data
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // latest news action
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.Latestnews = action.payload.data.articles
    })
    // slider news action

    builder.addCase(fetchSliderNews.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchSliderNews.fulfilled, (state, action) => {
      state.SliderhNews = action.payload.data.articles
    })
  }
})

export default dataSlice.reducer
