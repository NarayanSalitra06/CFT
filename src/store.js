import { configureStore } from '@reduxjs/toolkit'
import PostSlice from './redux/PostSlice'


export const store = configureStore({
  reducer: {
    posts:PostSlice,
  },
})