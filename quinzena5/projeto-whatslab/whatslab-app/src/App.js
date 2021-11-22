import React from 'react';
import styled from 'styled-components';
// import Mensagem from './components/Mensagem';
// import Footer from './components/Footer';
// import './App.css';
// import Chat from './components/Whatsapp';

const Header = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
background-color: black;
width: 100%;
height: 70px;
`

const Body = styled.body`
display:flex;
justify-content:center;
background-image: url("https://personalmarketingdigital.com.br/wp-content/uploads/2018/05/background-whatsapp-7.jpg");
background-size:cover;
`
const Container = styled.div`
max-width: 600px;
height: 100vh;
border: 1px solid black;
flex: 1 1 0%;
display: flex;
flex-direction: column;
`
const Chat = styled.div`
background-image: url("https://i.pinimg.com/originals/62/40/b6/6240b66d5c50c8661eee78b439a7d33c.jpg");
background-size: cover;
flex: 1 1 0%;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 20px;
`

const Form = styled.div`
display:flex;
gap:5px;
padding:10px;
background-color:black;
height: 40px;
`

const InputUsuario = styled.input`
width:100px;
border-radius: 10px;
`
const InputMensagem = styled.input`
flex: 1 1 0%;
border-radius: 10px;`

const BoldText = styled.span`
font-weight: bold;
`
const Botão = styled.button`
border-radius: 10px;
cursor: pointer;
`
const ImgZap = styled.img`
margin: 10px;
width: 80px;
height: 80px;
cursor: pointer;
`
const ImgFone = styled.img`
width: 45px;
height: 45px;
cursor: pointer;
margin-left: 290px;
`
const ImgLupa = styled.img`
width: 45px;
height: 45px;
cursor: pointer;
`
const ImgCamera = styled.img`
width: 45px;
height: 45px;
cursor: pointer;
`
class App extends React.Component {
  state = {

    mensagem: [
      {
        usuario: "",
        mensagem: ""
      },
    ],
    valorInputUsuario: '',
    valorInputMensagem: ''
  }

  adicionarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: ": " + this.state.valorInputMensagem,

    }

    const novaMensagens = [...this.state.mensagem, novaMensagem];
    this.setState({ mensagem: novaMensagens });
    this.setState({valorInputUsuario: "", valorInputMensagem: ""});//Consegui fazer que limpe os campos dos inputs depois de enviado!
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {

    const listaDeComponentes = this.state.mensagem.map((mensagem,index) => {
      return (

        <p key={index}><BoldText>{mensagem.usuario}</BoldText>
          {mensagem.mensagem}</p>

      )
    })

    return (
      <Body>
        <Container>
        <Header>
        <ImgZap src="https://i.pinimg.com/originals/69/d4/23/69d4234d292e7ad304519d74aad2f561.jpg" />
        <ImgFone src="http://whatsapp_labenu.surge.sh/img/fone.png" />
        <ImgLupa src="http://whatsapp_labenu.surge.sh/img/lupa.png" />
        <ImgCamera src="http://whatsapp_labenu.surge.sh/img/cam.png" />
        </Header>
          <Chat>{listaDeComponentes}</Chat>
          <Form>
            <InputUsuario
               
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
            />
            <InputMensagem
              
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />
            <Botão onClick={this.adicionarMensagem}>Enviar </Botão>
          </Form>
        </Container>
      </Body>
    );
  }
}
export default App;

