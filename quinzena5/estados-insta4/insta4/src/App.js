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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/40'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />
        <Post
          nomeUsuario={'fabio.szheer'}
          fotoUsuario={'https://picsum.photos/50/29'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />
        <Post
          nomeUsuario={'larissa.avellar'}
          fotoUsuario={'https://picsum.photos/50/100'}
          fotoPost={'https://picsum.photos/200/150?random=3'}
        />
      </MainContainer>
    );
  }
}

export default App;
