import { useEffect } from "react"
import { useTodoStore } from "./store/useTodoStore"

export const Todo = () => {

  const tasks = useTodoStore(state => state.tasks)
  const addTask = useTodoStore(state => state.addTask)
    // ({
    // tasks: store.tasks,
    // store.addTask,
    // store.updateTask,
    // store.removeTask,
// }))
  
  useEffect(() => {
    addTask("test")
  }, [])
  
  console.log(tasks);
  return (
    <article className="bg-white min-w-[600px] rounded-[20px] px-[55px] pt-[20px] flex items-center justify-center">
      <h1 className="text-[40px] mb-[0.3em]">To Do App</h1>
      <section></section>
      <section></section>
    </article>
  )
}