import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createId } from '@paralleldrive/cuid2'
import { TodoStore } from './types'

export const useTodoStore = create<TodoStore>()(devtools(persist((set) => ({
  tasks: [
    {
      id: '1',
      title: 'Task 1',
      createdAt: 9089,
    },
    {
      id: '2',
      title: 'Task 2',
      createdAt: 7687,
    },
  ],
  addTask: (title) => {
    const newTask = {
      id: createId(),
      title,
      createdAt: Date.now(),
    }
    set((state) => ({ tasks: [newTask].concat(state.tasks) }))
  },
  updateTask: (id, title) => {
    set((state) => ({
      tasks: state.tasks.map((task) => {
        return {
          ...task,
          title: task.id === id ? title : task.title
        }
      })
    }))
  },
  removeTask: (id) => {
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }))
  },
}), { name: 'simple-todo' })))