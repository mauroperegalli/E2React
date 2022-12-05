import React  from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'





const Navbarcontainer = styled.header`
    height: 100px ;
    display: flex;
    flex-direction: row;
    background-color: #5f5d5d;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Navlink = styled(Link)`
    cursor: pointer;
    color: white;
    font-size: 1.5em;
    text-decoration: none;

`

const Navlinkrojo = styled(Link)`
    cursor: pointer;
    color: #f80606;
    font-size: 1.5em;
    text-decoration: none;

`



export const Navbar = () => {

  let tasklistt = JSON.parse(localStorage.getItem('tasks')) || [];
  console.log(tasklistt);

  return (
    <>
    
        <Navbarcontainer>
                <Navlink to="*">Home</Navlink>
                {tasklistt !== [] ? <Navlink to="/todolist">TodoList</Navlink> : <Navlinkrojo to="/todolist">TodoList</Navlinkrojo>}
                <Navlink to="/pokelist">PokeList</Navlink>
        </Navbarcontainer> 
    
    </>
  )
}
