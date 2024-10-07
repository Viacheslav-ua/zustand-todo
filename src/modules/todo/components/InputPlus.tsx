import { Plus } from 'lucide-react';
import { useState } from 'react';

interface InputPlusProps {
  addTask: (title: string) => void
}

export const InputPlus: React.FC<InputPlusProps> = ({ addTask }) => {

  const [valueTitle, setValueTitle] = useState('');

  return (
    <div className='w-full flex'>
      <input 
        type="text" 
        placeholder="here you can add a new task ..." 
        onChange={(event) => setValueTitle(event.target.value)}
        onKeyDown={(event) => event.key === 'Enter' && addTask(valueTitle)}
        value={valueTitle}
        className='border-[1px] border-[#b1b1b1] bg-[#dbe2ef] rounded-l-[5px] px-3 py-2 w-full
        placeholder:text-[7b7b7b] outline-none focus:border-blue-500 grow'
        />
      <button
        onClick={() => addTask(valueTitle)}
        aria-label="Add task"
        title="Add task"
        className='border-none w-[60px] flex justify-center items-center rounded-r-[5px] 
        bg-[#3f72af] hover:opacity-80 transition-opacity text-white'
        ><Plus size={28} /></button>
    </div>
  )
}