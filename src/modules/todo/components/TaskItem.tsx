import { Trash2, Pencil, Save, X, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface TaskItemProps {
  id: string
  title: string
  forRemove: (id: string) => void
  removeTask: (id: string) => void
  updateTask: (id: string, title: string) => void
}

export const TaskItem: React.FC<TaskItemProps> = ({ id, title, removeTask, updateTask, forRemove }) => {

  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const editTitleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      editTitleInputRef.current?.focus();
    }
  }, [isEditing]);

  const handelChecked = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      forRemove(id)
    }

  }

  return (
    <div className='w-full flex items-center gap-1 mb-4 bg-[#dbe2ef] rounded-[5px]'>
      <label className='grow flex items-center gap-4 py-2 px-6 cursor-pointer'>
        <input type="checkbox" checked={isChecked}
          disabled={isEditing}
          onChange={handelChecked}
          // className='w-5 h-5'
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            ref={editTitleInputRef}
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyDown={(e) => {if (e.key === 'Enter') {
               setIsEditing(false)
               updateTask(id, editedTitle) 
              }}}
            className='w-full bg-inherit outline-none py-2 shadow-sm shadow-[#3F72AF]'
          />
        ) : (
          <p className='py-2'>{title}</p>
        )

        }
        {/* <p className='text-md'>{title}</p> */}
      </label>

      {isEditing ? (
        <>
          <button aria-label='save'
            className='w-[40px] flex justify-center items-center'
            onClick={() => { setIsEditing(false); updateTask(id, editedTitle) }}>
              <Check size={22} color='green' className='hover:opacity-70 transition-opacity' />
          </button>
          <button aria-label='cancel'
            onClick={() => { setIsEditing(false); setEditedTitle(title) }}
            className='w-[40px] flex justify-center items-center'>
              <X size={22} color='red' className='hover:opacity-70 transition-opacity' />
          </button>
        </>
      ) : (
        <>
          <button aria-label='edit'
            className='w-[40px] flex justify-center items-center'
            onClick={() => setIsEditing(true)}>
            <Pencil size={22} color='blue' className='hover:opacity-70 transition-opacity' />
          </button>
          <button aria-label='remove'
            onClick={() => removeTask(id)}
            className='w-[40px] flex justify-center items-center'>
            <Trash2 size={22} color='red' className='hover:opacity-70 transition-opacity' />
          </button>
        </>
      )}



    </div>
  )
}