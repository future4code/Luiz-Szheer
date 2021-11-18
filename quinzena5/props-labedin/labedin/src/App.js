import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './components/ImagemButton/foto1.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Email from './components/ImagemButton/email.png';
import Localizacao from './components/ImagemButton/localizacao.jpg';
import Nasa from './components/ImagemButton/Logonasa.png'
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ Foto } 
          nome="Fábio Szheer" 
          descricao="Oi, eu sou o Fábio Szheer. Sou assessor de investimentos e estou buscando me introduzir nesse mundo de programação"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
          imagem= { Email }
          texto="Email:" 
          descricao= "fszheer@gmail.com"
        />
      
        <CardPequeno 
          imagem= { Localizacao }
          texto ="Endereço:"
          descricao= "Rua Araguaia 1266 - RJ"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem={ Nasa } 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
