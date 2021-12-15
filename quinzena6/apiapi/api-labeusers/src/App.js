import axios from 'axios';
import './App.css';
import React from 'react'

export default class App extends React.Component {
  state = {
    labenusers: [],
    inputNome: "",
    inputEmail: ""
  }

  componentDidMount() {
    this.pegarUsuario()
  }

  pegarUsuario = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "luiz-szheer-joy"
        }

      })
      .then((res) => {
        this.setState({ labenusers: res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

mudaNome = (e) => {
  this.setState({inputNome: e.target.value})
}

mudaEmail = (e) => {
  this.setState({inputEmail: e.target.value})
}

  criarUsuario =() => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {

      name: this.state.inputNome,
      email: this.state.inputEmail
    };

    const headers = {
      headers: {
        Authorization: "luiz-szheer-joy"
      }
    }
    axios
    .post(URL, body, headers)
    .then((res) => {
      this.pegarUsuario()
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }

  render() {

    const lista = this.state.labenusers.map((users) => {
      return <p key={users.id}> {users.name}</p> 
    })
    return (
      <div>
        <button>Mudar de tela</button>
        <div>
          <input
            type="text"
            placeholder="Digite o número do usuário"
            size='25'
          value={this.state.inputNome}
          onChange={this.mudaNome}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Digite o seu e-mail"
            size='25'
            value={this.state.inputEmail}
            onChange={this.mudaEmail}
          />
        </div>
        
        <button onClick={this.criarUsuario}>Enviar</button>
        <p>{lista}</p>
      </div>
    );
  }

}

