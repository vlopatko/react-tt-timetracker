import { TrackedItem } from '@/src/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ItemsState = TrackedItem[]

interface InitialState {
  value: ItemsState
}

const initialState = { value: [] as ItemsState } as InitialState

export const items = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<Omit<TrackedItem, 'id' | 'createdAt'>>
    ) => {
      return {
        value: [
          ...state.value,
          {
            id: crypto.randomUUID(),
            createdAt: Date.now(),
            ...action.payload,
          },
        ],
      }
    },
    removeItem: (state, action: PayloadAction<Pick<TrackedItem, 'id'>>) => {
      return {
        value: state.value.filter((user) => user.id !== action.payload.id),
      }
    },
  },
})

export const { addItem, removeItem } = items.actions
export default items.reducer
