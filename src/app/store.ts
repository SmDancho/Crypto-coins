import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import coinsSlice from 'pages/coins/mainCoins'
import exchangesSlice from 'pages/exchanges'
import newsSlice from 'pages/home'
import dataSlice from 'widgets/comparePrice'
import currentCoinSlice from 'widgets/currentCoin'

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
