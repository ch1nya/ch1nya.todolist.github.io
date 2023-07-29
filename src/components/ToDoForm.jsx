import React, { useState } from 'react'
import s from '../styles/toDoForm.module.css'


const ToDoForm = ({addToDo}) => {
const [value, setValue] = useState('');
const handleSubmit = (e) => {
  e.preventDefault()
  addToDo(value)
  setValue('')
}
  return (
    <form className={s.container} onSubmit={handleSubmit}>
        <input 
          type={s.text}
          value={value}
          className={s.toDoInput} 
          placeholder='What is the task for today?'
          onChange={(e)=>{setValue(e.target.value)}}/>
        <button 
          type="submit"
          className={s.toDoButton}>Add task</button>
    </form>
  )
}

export default ToDoForm