import React from 'react';
import styled from 'styled-components';

const Mensagem = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
`
const Input1 = styled.input`
border: 2px solid black;
height: 40px;
width: 200px;
margin-left:180px;
background-color: #d3d3d3;
`
const Input2 = styled.input`
border: 2px solid black;
height: 40px;
width: 850px;
background-color: #d3d3d3;
`
const Input3 = styled.input`
border: 2px solid black;
height: 40px;
width: 60px;
margin-right:180px;
margin-left: 20px;
background-color: black;
color: white;
font-weight: bold
`
function mensagem(props) {
    return (
        <Mensagem>
        <div>
          <form method="" action="">
            <Input1 type="text" name="nome" placeholder="Usuário" />
          </form>
        </div>

        <div>
          <form method="" action="">
            <Input2 type="text" name="textarea" placeholder="Mensagem" />
          </form>
        </div>

        <div>
          <form method="" action="">
            <Input3 type="submit" name="enviar" value="Enviar" />
          </form>
        </div>

      </Mensagem>
    )
}

export default mensagem; 