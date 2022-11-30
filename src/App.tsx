/* eslint-disable @typescript-eslint/no-unused-vars */
// who make this horrible code

import React from 'react';
import Game from './Game'
import styled from 'styled-components';
import GameProps from './Game'
let j = false;


function App() {
  //

  j = false;

  const onClick = () => {
    console.log("Click");
    j = true;
  }
  return (
    <div className="App" >
      
      

      <Div>
        <Game/>
      </Div>
      
    </div>
    )
}

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  

  & span {
    
    color: white;
    font-size: 24px;
    position: absolute;
    font-family: 'Brush Script MT', cursive;
  }
`;

export default App;
export function jc()
{
  return j;
}
export function setJc(jc : boolean)
{
  j = jc;
}






