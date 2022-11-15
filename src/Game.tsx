// who make this horrible code
import "./Game.css"
import React from 'react';
import styled from 'styled-components';
import {GAME_BOX_HEIGHT, GAME_BOX_WIDTH} from "./GameBox"
import GameBox from "./GameBox"
import {useEffect, useState, useCallback} from 'react';
import { useDisplayName } from "./Hooks/HooksMain"
import Obstacle from "./Obstacle"


const G = 6;
const CAT_SIZE = 20;
const JUMP_HEIGHT = 50;
const obstacleWidth = 40;
const obstacleGap = 300;



interface GameProps{
  jd: boolean;
}


interface IObstacle {
  obstacleHeight: number;
  obstacleLeft: number;
}


export default function Game() {
  const [catPos, setCatPos] = useState(240 + CAT_SIZE);  
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const [obstacleHeight, setObstacleHeight] = useState(100)
  const [obstacleLeft, setObstacleLeft] = useState(GAME_BOX_WIDTH - obstacleWidth);

  const bottonObstacleHeight = GAME_BOX_HEIGHT - obstacleGap - obstacleHeight;

  useDisplayName("Game");
  
  useEffect(() => {
    if (bottonObstacleHeight <= 100)
    {
      setObstacleHeight(obstacleHeight + 100)
    }
  })

  
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
  
  console.log(bottonObstacleHeight)
  

  return (
    <div className="game" onClick={onClick}>
        
      <GameBox>
        <Obstacle width={obstacleWidth} height={obstacleHeight} left={obstacleLeft} top={-504} />
        <Obstacle width={obstacleWidth} height={bottonObstacleHeight} left={obstacleLeft} top={GAME_BOX_HEIGHT - (obstacleHeight - bottonObstacleHeight) - 704}/>
          <div className="Cat">
            <Cat top={catPos} width={CAT_SIZE} height={CAT_SIZE} />
          
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
