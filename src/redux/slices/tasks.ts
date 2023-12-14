import { Task } from '@/src/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TasksState = Task[]

interface InitialState {
  value: TasksState
}

const initialState = { value: [] as TasksState } as InitialState

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<Pick<Task, 'name' | 'description'>>
    ) => {
      return {
        value: [
          ...state.value,
          {
            id: crypto.randomUUID(),
            createdAt: Date.now(),
            closedAt: null,
            ...action.payload,
          },
        ],
      }
    },
    closedTask: (state, action: PayloadAction<string>) => {
      return {
        value: state.value.filter((user) => user.id !== action.payload),
      }
    },
  },
})

export const { addTask, closedTask } = tasks.actions
export default tasks.reducer
