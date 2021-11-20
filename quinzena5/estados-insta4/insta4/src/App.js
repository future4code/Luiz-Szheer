import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state={
    
    posts: [
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/40",
      fotoPost: "https://picsum.photos/200/150?random=1"
    },
    {
      nomeUsuario: "fabio.szheer",
      fotoUsuario: 'https://picsum.photos/50/29',
      fotoPost: 'https://picsum.photos/200/150?random=2'
    },
    {
      nomeUsuario: "larissa.avellar",
      fotoUsuario: 'https://picsum.photos/50/100',
      fotoPost: 'https://picsum.photos/200/150?random=3'
    }
  ],

  valorInputNome: "",
  valorInputFotoUser: "",
  valorInputFotoPost: ""
};

adicionarPost = () => {
  const novoPost = {
    nomeUsuario: this.state.valorInputNome,
    fotoUsuario:this.state.valorInputFotoUser,
    fotoPost:this.state.valorInputFotoPost
  };

  const novoPosts = [...this.state.posts, novoPost];
  this.setState({posts: novoPosts });
};

onChangeInputNome = (event) => {
  this.setState({ valorInputNome: event.target.value });
};

onChangeInputFotoUser = (event) => {
  this.setState({valorInputFotoUser: event.target.value });
};

onChangeInputFotoPost = (event) => {
  this.setState({valorInputFotoPost: event.target.value });
};

  render() {
    const listaDeComponentes = this.state.posts.map((posts) => {
      return <Post
      nomeUsuario={posts.nomeUsuario}
      fotoUsuario={posts.fotoUsuario}
      fotoPost={posts.fotoPost}
    />
    });
    return (
      <MainContainer>
        <input 
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={"Nome"}
        />
         <input 
        value={this.state.valorInputFotoUser}
        onChange={this.onChangeInputFotoUser}
        placeholder={"Foto User"}
        />
         <input 
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={"Foto Post"}
        />
      <button onClick={this.adicionarPost}>Adicionar</button>
        {listaDeComponentes}
      </MainContainer>
    );
  }
}

export default App;
