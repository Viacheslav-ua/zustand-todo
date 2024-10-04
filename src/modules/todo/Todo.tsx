import { useTodoStore } from "./store/useTodoStore"
import { InputPlus } from "./components/InputPlus"

export const Todo = () => {

  const tasks = useTodoStore(state => state.tasks)
  const addTask = useTodoStore(state => state.addTask)

  // tasks: store.tasks,
    // store.addTask,
    // store.updateTask,
    // store.removeTask,
  
  console.log(tasks);

  const handleAddTask = (title: string) => {
    if (title) {
      addTask(title)
    }
  }

  return (
    <article className="bg-white min-w-[600px] rounded-[20px] px-[55px] py-[20px] flex flex-col items-center justify-center">
      <h1 className="text-[40px] mb-[0.3em]">To Do App</h1>
      <section className="w-full">
        <InputPlus addTask={ handleAddTask } />  
      </section>
      <section></section>
    </article>
  )
}