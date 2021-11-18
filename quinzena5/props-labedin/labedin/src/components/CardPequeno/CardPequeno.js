import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components';

const LittleCard = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 5px 5px;
margin-bottom: 10px;
height: 100px;
background-color: #d1d1d1;
border-radius: 10px 20px;
`

const Imagem = styled.img`
width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Titulo = styled.h3`
padding: 10px;
`

function CardPequeno(props) {
    return (
        <LittleCard>
            <Imagem src= { props.imagem } />
            <Titulo>{ props.texto }</Titulo> <p>{ props.descricao }</p>
        </LittleCard>
    )
}

export default CardPequeno;