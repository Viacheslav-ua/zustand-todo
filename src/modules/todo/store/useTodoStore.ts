import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
type Task = {
  id: string
  title: string
  createdAt: number
}

interface TodoStore {
  tasks: Task[]
  addTask: (title: string) => void
  updateTask: (id: string, title: string) => void
  removeTask: (id: string) => void
}

export const useTodoStore = create<TodoStore>((set, get) => ({
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
    const { tasks } = get()
    const newTask = {
      id: uuidv4(),
      title,
      createdAt: Date.now(),
    }
    console.log("addTaask:",title, tasks);
 

  },
  updateTask: (id, title) => {
    
  },
  removeTask: (id) => {
    
  },
}))