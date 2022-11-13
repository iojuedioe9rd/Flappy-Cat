import React from 'react'
import Background from './img/background'
import "./Game.css";

const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;

export default function GameBox({children}) {
  return (
    <div className="game-box">
        <Background width={GAME_WIDTH} height={GAME_HEIGHT}/>
        {children}
    </div>
  )
}

export const GAME_BOX_WIDTH = GAME_WIDTH;
export const GAME_BOX_HEIGHT = GAME_WIDTH;