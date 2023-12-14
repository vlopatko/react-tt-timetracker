import { Item } from '@/src/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ItemsState = Item[]

interface InitialState {
  value: ItemsState
}

const initialState = { value: [] as ItemsState } as InitialState

export const items = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<Item, 'id' | 'createdAt'>>) => {
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
    editItem: (
      state,
      action: PayloadAction<Pick<Item, 'id' | 'spentTime'>>
    ) => {
      return {
        value: state.value.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, spentTime: action.payload.spentTime }
          } else {
            return item
          }
        }),
      }
    },
    removeItem: (state, action: PayloadAction<Pick<Item, 'id'>>) => {
      return {
        value: state.value.filter((user) => user.id !== action.payload.id),
      }
    },
  },
})

export const { addItem, editItem, removeItem } = items.actions
export default items.reducer
