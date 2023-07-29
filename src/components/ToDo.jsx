import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import s from './../styles/toDo.module.css'



const ToDo = ({task,toggleComplete, deleteToDo,editToDo}) => {
  return (
    <div className={s.ToDo}>
      <p className={`${task.completed 
        ? s.completed 
        : ""}`} 
        onClick={() => toggleComplete(task.id)}>
          {task.task}
        
      </p>
      <div>
        <FontAwesomeIcon 
          className={s.icon} 
          icon={faPenToSquare}
          onClick={()=>{editToDo(task.id)}}
           />
          
        <FontAwesomeIcon 
          className={s.iconRight} 
          icon={faTrash}
          onClick={()=>{deleteToDo(task.id)}} />
      </div>
    </div>
  )
}

export default ToDo