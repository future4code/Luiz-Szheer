import React from 'react';
import styled from 'styled-components';

const Chat = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 600px;
background-color: #d3d3d3;
border-radius: 1%;
`

const Div = styled.div`
display: flex;
`


function whatsapp(props) {
    return (
        <Chat>
            <Div>
                mensagem de texto escrita
            </Div>
            
        </Chat>
    )
}

export default whatsapp; 