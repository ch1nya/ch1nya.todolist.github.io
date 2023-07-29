import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'

import s from '../styles/toDoWrapper.module.css'

import {v4 as uuidv4} from 'uuid'
import EditToDoForm from './EditToDoForm'
uuidv4() 


const ToDoWrapper = ( ) => {
  const [todos, setTodos] = useState([])

  const addToDo = (todo) => {setTodos([...todos,{
    id: uuidv4(), 
    task: todo, 
    completed: false, 
    isEditing: false 
  }])}

  const toggleComplete  = id => {
    setTodos(
      todos.map((todo) => 
        todo.id === id 
        ? { ...todo, completed: !todo.completed } 
        : todo))
  }

  const deleteToDo = id => {
    setTodos(
      todos.filter(todo => 
        todo.id !== id))
  }

  const editToDo = id => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id 
      ? {todo, task, isEditing: !todo.isEditing} 
      : todo))
  }
  return (
    <div className={s.wrapper}>
      <h1>Get your things done!</h1>
      <ToDoForm 
        addToDo={addToDo}/>
        {todos.map((todo,index)=>(
          todo.isEditing ? (
            <EditToDoForm 
              editToDo={editTask}
              task ={todo}
            />
          ):(
          <ToDo 
            task={todo} 
            key={index}   
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />)
  
      ))}
    </div>
  )
}

export default ToDoWrapper