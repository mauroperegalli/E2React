import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import {Card} from '../components/Card'
import { GeneralWrapper } from '../components/GeneralWrapper'
import { useState } from 'react'

const FormPoke = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 100px;
width: 80%;

`

const FormInput = styled.input`
    width: 80%;
    height: 30px;
`
const FormButton = styled.button`
    width: 150px;
    height: 30px;
    cursor: pointer;
`

const PokeContainer = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PokeList = () => {

    const [pokemon, setPokemon] = useState()
    const [error, setError] = useState()
  
    const Pokemon = async(e)=>{
      e.preventDefault()
      if(e.target.poke.value === ""){
        return alert("Ingresa un numero")}

        else if (e.target.poke.value >= '906'){
        return alert("Ingresa un numero menor a 906")}

        
      
      try{
      
        const Input = e.target.poke.value.toLowerCase().trim()
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Input}`)
        setError(error)
        setPokemon(data)
      }
      catch(err){
        setPokemon()
        setError(error)
        
      }
    } 

  return (
    <>

    <GeneralWrapper>
        <FormPoke onSubmit={Pokemon}>
            <FormInput type='number' name='poke' placeholder='Ingrese un ID' ></FormInput>
            <FormButton>Buscar</FormButton>
        </FormPoke>
        <PokeContainer>
             {pokemon && <Card pokemon={pokemon}/>}
        </PokeContainer>
    </GeneralWrapper>
    
    </>
  )
}
