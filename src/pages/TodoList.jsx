import React, { useState } from 'react'
import styled  from 'styled-components';
import { GeneralWrapper } from '../components/GeneralWrapper';



const Input = styled.input`
  width: 80%;
  height: 30px;
`

const AddButton = styled.button`
  width: 150px;
  height: 30px;
  cursor: pointer;
`

const RemoveButton = styled.button`
  width: 150px;
  height: 30px;
  cursor: pointer;
`

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
`

const TaskContainer = styled.div`
  width: 60%;
  height: 40px;
  background-color: #afadad;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const TodoList = () => {

  let tasklistt = JSON.parse(localStorage.getItem('tasks')) || []

  const saveLocalStorage = (tasks) => {
      localStorage.setItem('tasks', JSON.stringify(tasks))}

  const [task, settask] = useState(tasklistt);

  const deleteall = () => {
    settask([])
  }

  saveLocalStorage(task);
  
  


  return (
    <>
      <GeneralWrapper>
        <Form onSubmit={e =>{
          e.preventDefault();
          const newtask = e.target.input.value
          settask([...task, newtask])
          }}>
          <Input type="text" placeholder='Ingrese su tarea' name='input'/>
            <AddButton type='submit'>Agregar</AddButton>
        </Form>
        <RemoveButton onClick={deleteall}>Eliminar</RemoveButton>  
        {task.map((e) => <TaskContainer> {e}  </TaskContainer> )}
      </GeneralWrapper>
    </>
  )
}
