import react from "react";
import styled from "styled-components";


class Etapa2 extends react.Component {
    render(){
        return (
          <div>
           <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
           <div>
           <p>5. Qual curso?</p>
           <input type='text'></input>
           </div>
           <div>
           <p>6. Qual a unidade de ensino?</p>
           <input type='text'></input>
          </div>
          </div>
        );
       }

}

export default Etapa2;