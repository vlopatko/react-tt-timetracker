import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './slices/auth'
import itemsTrackedReducer from './slices/itemsTracked'
import usersReducer from './slices/users'
import tasksReducer from './slices/tasks'

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  tasks: tasksReducer,
  itemsTracked: itemsTrackedReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
