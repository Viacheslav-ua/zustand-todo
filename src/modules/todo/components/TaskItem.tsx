import { Trash2, Pencil } from 'lucide-react';
import { useState } from 'react';

interface TaskItemProps {
  id: string
  title: string
  forRemove: (id: string) => void
  removeTask: (id: string) => void
  updateTask: (id: string, title: string) => void
}

export const TaskItem: React.FC<TaskItemProps> = ({ id, title, removeTask, updateTask, forRemove }) => {

  const [isChecked, setIsChecked] = useState(false);

  const handelChecked = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      forRemove(id)
    }

  }
  return (
    <div className='w-full flex items-center gap-1 mb-4 bg-[#dbe2ef] rounded-[5px]'>
      <label className='grow flex items-center gap-4 py-4 px-6 cursor-pointer'>
        <input type="checkbox" checked={isChecked}
          onChange={handelChecked}
          className='w-5 h-5'
        />
        <p className='text-md'>{title}</p>
      </label>

        <button aria-label='edit'
          className='w-[40px] flex justify-center items-center'
          onClick={() => updateTask(id, title)}>
          <Pencil size={22} color='green' className='hover:opacity-70 transition-opacity' />
        </button>

        <button aria-label='remove'
          onClick={() => removeTask(id)}
          className='w-[40px] flex justify-center items-center'>
          <Trash2 size={22} color='red' className='hover:opacity-70 transition-opacity'/>
        </button>
      
    </div>
  )
}