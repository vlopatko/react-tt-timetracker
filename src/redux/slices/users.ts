import { User } from '@/src/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UsersState = User[]

interface InitialState {
  value: UsersState
}

const initialState = { value: [] as UsersState } as InitialState

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      return { value: [...state.value, action.payload] }
    },
    removeUser: (state, action: PayloadAction<number>) => {
      return {
        value: state.value.filter((user) => user.id !== action.payload),
      }
    },
  },
})

export const { addUser, removeUser } = users.actions
export default users.reducer
