import { Task } from '@/src/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TasksState = Task[]

interface InitialState {
  value: TasksState
}

const initialState = {
  value: [
    {
      id: crypto.randomUUID(),
      name: 'first task',
      createdAt: 1702569927492,
      closedAt: null,
      description: 'first task',
    },
    {
      id: crypto.randomUUID(),
      name: 'second task',
      createdAt: 1702569827492,
      closedAt: null,
      description: 'second task',
    },
    {
      id: crypto.randomUUID(),
      name: 'third task',
      createdAt: 1702568927492,
      closedAt: 1702569227492,
      description: 'third task',
    },
    {
      id: crypto.randomUUID(),
      name: 'fourth task',
      createdAt: 1702567927492,
      closedAt: 1702569925492,
      description: 'fourth task',
    },
    {
      id: crypto.randomUUID(),
      name: 'fifth task',
      createdAt: 1702564927492,
      closedAt: 1702565927492,
      description: 'fifth task',
    },
  ] as TasksState,
} as InitialState

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
