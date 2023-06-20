import { configureStore } from '@reduxjs/toolkit'
import coinsSlice from 'pages/coins/mainCoins/model/redux'
import exchangesSlice from 'pages/exchanges/model/redux'
import newsSlice from 'pages/home/model/redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import dataSlice from 'widgets/comparePrice/model/redux'
import currentCoinSlice from 'widgets/currentCoin/export'

export const store = configureStore({
  reducer: {
    coins: coinsSlice,
    compareCionsPrice: dataSlice,
    news: newsSlice,
    exchanges: exchangesSlice,
    currentCoin: currentCoinSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
