import React from 'react';
import './App.css';
import Chat from './components/Whatsapp';
import styled from 'styled-components';
import Mensagem from './components/Mensagem';
import Footer from './components/Footer';

const Body = styled.body`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url("https://fiodevida.com/wp-content/uploads/2021/04/GettyImages-486840926-424eecdec9d94ca2a12401816cb2ab12.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1");
  background-size: cover;
`
const Container = styled.div`
width: 80%;
margin: 10px;
`
// const Imagem = styled.img`
// width: 70px;
// margin-right: 10px;
// border-radius: 50%;
// `

const Titulo = styled.h2`
display: flex;
justify-content: center;
`

function App() {
  return (
    <Body>
      <Container>
        <Titulo>Whatsapp Labenu</Titulo>
        <Chat></Chat>

        <Mensagem></Mensagem>
      </Container>
      <footer>
      <div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        </div>
      </footer>
    </Body>
  );
}

export default App;

