// who make this horrible code
import "./Game.css"
import React from 'react';
import styled from 'styled-components';
import Background from "./img/background"
import {GAME_BOX_HEIGHT, GAME_BOX_WIDTH} from "./GameBox"
import GameBox from "./GameBox"
import {useEffect, useState, useCallback} from 'react';



const G = 6;
const CAT_SIZE = 20;
const JUMP_HEIGHT = 50;
const obstacleWidth = 40;

interface GameProps{
  jd: boolean;
}

export default function Game() {
   const [catPos, setCatPos] = useState(240 + CAT_SIZE);  
   const [gameHasStarted, setGameHasStarted] = useState(false)
   const [obstaclePos, setObstaclePos] = useState(GAME_BOX_WIDTH)

   useEffect(() => {

      let id;
      if  (gameHasStarted && (catPos < GAME_BOX_HEIGHT - CAT_SIZE))
      {
        id = setInterval(() => {
          setCatPos(catPos => catPos + G);
        }, 24)

        
      }
      return () => {
        clearInterval(id);
      }
    }, [catPos, gameHasStarted])

    let onClick = () => {
      let newCatPos = catPos - JUMP_HEIGHT;
      if (!gameHasStarted)
      {
        setGameHasStarted(true)
      }
      else if(newCatPos < 0)
      {
        setCatPos(0)
      }
      else
      {
        setCatPos(newCatPos);
      }
      
    }

  return (
    <div className="game" onClick={onClick}>
        
            <GameBox>
                <div className="Cat">
                    <Cat top={catPos} width={CAT_SIZE} height={CAT_SIZE}/>
                </div>
            </GameBox>
                
                
            
        
            
      
    </div>
  )
}

interface CatProps {
    top: number;
    width: number;
    height: number;
}

const Cat = styled.div<CatProps>`
    position: absolute;
    background-color: red;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    top: ${(props) => props.top}px;
    border-radius: 50%;
`;

