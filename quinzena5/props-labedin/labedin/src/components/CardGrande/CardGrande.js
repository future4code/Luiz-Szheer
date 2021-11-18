import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';

const BigCardContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
background-color: #d1d1d1;
border-radius: 10px 20px;
`
const Imagem = styled.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;
`

const Div = styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start;
`

const Nome = styled.h4`
margin-bottom: 15px;
`
function CardGrande(props) {
    return (
        <BigCardContainer>
            <Imagem src={ props.imagem } />
            <Div>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </Div>
        </BigCardContainer>
    )
}

export default CardGrande;