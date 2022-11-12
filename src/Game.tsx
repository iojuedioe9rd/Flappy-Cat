// who make this horrible code
import "./Game.css"
import React from 'react';
import styled from 'styled-components';

export default function Game() {
    
  return (
    <div className="game">
        <div className="GameBox">
            <GameBox>
                <div className="Cat">
                    <Cat/>
                </div>
                
            </GameBox>
        </div>
        
      
    </div>
  )
}



const Cat = styled.div`
    position: absolute;
    background-color: red;
    height: 20px;
    width: 20px;
    top: 20px;
    border-radius: 50%;
`;

const GameBox = styled.div`
    height: 500px;
    width: 500px;
    background: url("../img/background.svg");
`;