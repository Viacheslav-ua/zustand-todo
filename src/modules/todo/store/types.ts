type Task = {
  id: string
  title: string
  createdAt: number
}

export interface TodoStore {
  tasks: Task[]
  addTask: (title: string) => void
  updateTask: (id: string, title: string) => void
  removeTask: (id: string) => void
}