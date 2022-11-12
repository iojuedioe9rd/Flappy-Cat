// who make this horrible code

import React from 'react';
import Game from './Game'
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      
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
`;

export default App;







