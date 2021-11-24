import react from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1.js";
import Etapa2 from "./components/Etapa2.js";
import Etapa3 from "./components/Etapa3.js";
import Etapa4 from "./components/Etapa4.js";

const Body=styled.div`
text-align: center;
`

class App extends react.Component {
  state = {
  step: 1,
}

renderStep = () => {
  switch (this.state.step) {
    case 1:
    return <Etapa1 />;

    case 2:
    return <Etapa2 />;

    case 3:
    return <Etapa3 />;

    case 4:
    return <Etapa4 />;

    default:
    break;
  }
}
nextStep = () => {
  this.setState({ step: this.state.step + 1 })
}

 render () {
  return (
    <Body>
     {this.renderStep()}
     {this.state.step !==4 && (<button onClick = {this.nextStep} >Próxima Etapa</button>)}
    </Body>
  );
 }

}

export default App;