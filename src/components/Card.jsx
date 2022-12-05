import React from 'react'
import  styled  from 'styled-components';


const ContainerCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Nombre = styled.h3`
    font-size: 2em;
    text-transform: uppercase;

`

const Img = styled.img`
    width: 100%;
`


export const Card = ({pokemon}) => {
    const {name,sprites} = pokemon
  return (
    <>
    <ContainerCard>
        <Img src={sprites.front_default} alt={name}/>
        <Nombre>{name}</Nombre>
    </ContainerCard>
    </>
  )
}
