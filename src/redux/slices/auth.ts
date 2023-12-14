import { AuthState, User } from '@/src/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  value: AuthState
}

const initialState = {
  value: {
    isAuth: false,
    username: '',
    uid: '',
  } as AuthState,
} as InitialState

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (_, action: PayloadAction<AuthState>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload.username,
          uid: action.payload.uid ? action.payload.uid : crypto.randomUUID(),
        },
      }
    },
  },
})

export const { logOut, logIn } = auth.actions
export default auth.reducer
