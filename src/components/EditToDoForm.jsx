import React, { useState } from 'react'
import s from '../styles/toDoForm.module.css'


const EditToDoForm = ({editToDo, task}) => {
const [value, setValue] = useState(task.task);
const handleSubmit = (e) => {
  e.preventDefault()
  editToDo(value, task.id)
  setValue('')
}
  return (
    <form className={s.container} onSubmit={handleSubmit}>
        <input 
          type={s.text}
          value={value}
          className={s.toDoInput} 
          placeholder='Update task?'
          onChange={(e)=>{setValue(e.target.value)}}/>
        <button 
          type="submit"
          className={s.toDoButton}>Update task</button>
    </form>
  )
}

export default EditToDoForm