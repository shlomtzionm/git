import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
   isDog: isDogReducer },
  })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch