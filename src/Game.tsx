/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// who make this horrible code
import "./Game.css"
import React from 'react';
import styled from 'styled-components';
import {GAME_BOX_HEIGHT, GAME_BOX_WIDTH} from "./GameBox"
import GameBox from "./GameBox"
import {useEffect, useState, useCallback} from 'react';
import { useDisplayName } from "./Hooks/HooksMain"
import Obstacle from "./Obstacle"
import "./css/main.css"
import Cat from "./Player"

let scoreSFX = new Audio("https://archive.org/download/classiccoin/classiccoin.wav");
let gameOverSFX = new Audio("https://archive.org/download/smb_gameover/smb_gameover.wav");
let jumpSFX = new Audio("https://archive.org/download/jump_20210424/jump.wav");


const G = 6;
const CAT_SIZE = 20;
const JUMP_HEIGHT = 50;
const obstacleWidth = 40;
const obstacleGap = 200;

const CutOffBox = styled.div`
  background-color: #ffffff;
  width: ;
`


interface GameProps{
  jd: boolean;
}


interface IObstacle {
  obstacleHeight: number;
  obstacleLeft: number;
}


export default function Game() {
  const [catPos, setCatPos] = useState(CAT_SIZE);  
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const [obstacleHeight, setObstacleHeight] = useState(100)
  const [obstacleLeft, setObstacleLeft] = useState((GAME_BOX_WIDTH - obstacleWidth - 1000 + 500));
  const [score, setScore] = useState(0)

  const bottomObstacleHeight = GAME_BOX_HEIGHT - obstacleGap - obstacleHeight;
  
  function Restart()
  {
    setGameHasStarted(false);
    setCatPos(CAT_SIZE)
    setObstacleHeight(100)
    setObstacleLeft((GAME_BOX_WIDTH - obstacleWidth - 1000 + 500))
    setScore(0)
  }

  useDisplayName("Game");
  
  useEffect(() => {
    setObstacleLeft((GAME_BOX_WIDTH - obstacleWidth - 1000 + 500))
  }, [setObstacleLeft])

  useEffect(() => {
    
    if (bottomObstacleHeight <= 100)
    {
      
      setObstacleHeight(obstacleHeight + 100)
    }
  },[bottomObstacleHeight, setObstacleHeight, obstacleHeight])

  useEffect(() => {
    let obstacleId;
    let ifPos = (obstacleLeft >= -540)
    
    if (ifPos && gameHasStarted) {
      
      obstacleId = setInterval(() => {
        setObstacleLeft(obstacleLeft => obstacleLeft - 5)
      }, 24)
      
      return () => {
        clearInterval(obstacleId)
      }
      
    }
    
    if (obstacleLeft <= -500)
    {
      //setObstacleHeight(obstacleHeight + 5)
      let props = Math.random() * 4;
      
      if (props >= 4)
      {
        props = 100 * props;
      } else if (props >= 2)
      {
        props = 50 * props
      } else if (props >= 2)
      {
        props = 33.3333333333 * props + 200
      } else if (props >= 1)
      {
        props = 25 * props
        }
      
        
      
      

      

      setObstacleHeight(props)
      setObstacleLeft((GAME_BOX_WIDTH - obstacleWidth - 1000 + 500))
      setScore(score + 1)
      scoreSFX.play()

    
    }
  }, [gameHasStarted, obstacleLeft])

  
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
  
  useEffect(() => {
    const hasCollidedWithTopObstacle = catPos >= 0 && catPos < obstacleHeight && (-500 > obstacleLeft)
    const hasCollidedWithBottomObstacle = catPos <= 500 && catPos >= 500 - bottomObstacleHeight && (-500 > obstacleLeft - 40)



    if ((hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle))
    {
      Restart()
      console.log("oof")
      gameOverSFX.play()
      }
  })

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
        jumpSFX.play()
      }
      
  }
  
  
  

  return (
    <>
      <div className="CutOffBox" style={{
        position: 'absolute', width: 600, height: 500,
        
      }} />
        
      <GameBox>
        
        <Obstacle width={obstacleWidth} height={obstacleHeight} left={obstacleLeft + 40} top={-0} />
        <Obstacle width={obstacleWidth} height={bottomObstacleHeight} left={obstacleLeft} top={GAME_BOX_HEIGHT - (obstacleHeight + bottomObstacleHeight) + 99}/>
          
        <Cat top={catPos} width={CAT_SIZE} height={CAT_SIZE} />
        
        
        <div className="Input" style={{ position:'absolute',width:600,height:500 }}
          onClick={onClick} />
            
      </GameBox>
                
                
      <span>{score} </span>
        
            
      
    </>
  )
}



const Input = styled.div`
  width:  500px;
  height: 500px;
`
