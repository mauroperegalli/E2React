import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ContextToDo = createContext()

export const Context = ({ children }) => {
  
  let tasklistt = JSON.parse(localStorage.getItem("tasks")) || []

  const [tasks, setTasks] = useState(tasklistt)

  const saveLocalStorage = () =>{
    return localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  return (
    <ContextToDo.Provider value={{ tasks, setTasks, updateLocal: saveLocalStorage}}>
      {children}
    </ContextToDo.Provider>
  )
}