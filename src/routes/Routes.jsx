import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import {Home} from '../pages/Home'
import {TodoList} from '../pages/TodoList'
import {PokeList} from '../pages/PokeList'

export const Routes = () => {
  return (
    <>
        <ReactRoutes>
            <Route path="*" element={<Home/>} />
            <Route path="/todolist" element={<TodoList/>} />
            <Route path="/pokelist" element={<PokeList/>} />
        </ReactRoutes>  
    
    </>
  )
}
