import { useTodoStore } from "./store/useTodoStore"
import { InputPlus } from "./components/InputPlus"
import { TaskItem } from "./components/TaskItem"

export const Todo = () => {

  const tasks = useTodoStore(state => state.tasks)
  const addTask = useTodoStore(state => state.addTask)
  const updateTask = useTodoStore(state => state.updateTask)
  const removeTask = useTodoStore(state => state.removeTask)

  console.log(tasks);

  const handleAddTask = (title: string) => {
    if (title) {
      addTask(title)
    }
  }

  const forRemoveTask = (id: string) => {
    
  }

  return (
    <article className="bg-white min-w-[600px] rounded-[20px] px-14 pt-5 pb-8 flex flex-col items-center justify-center">
      <h1 className="text-[40px] mb-[0.3em]">To Do App</h1>
      <section className="w-full pb-4">
        <InputPlus addTask={handleAddTask} />
      </section>
      <section className="w-full">
        {!tasks.length && <p>There is no one task yet...</p>}
        {tasks.map(task =>
          <TaskItem key={task.id} title={task.title} id={task.id} 
            removeTask={removeTask} 
            updateTask={updateTask}
            forRemove={forRemoveTask} />
        )}
      </section>
    </article>
  )
}