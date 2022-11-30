import React from 'react'
import Background from './img/background'
import "./Game.css";
import { useDisplayName } from './Hooks/HooksMain'

const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;

export default function GameBox({ children }) {
  useDisplayName("GameBox")
  return (
    <>
        <Background width={GAME_WIDTH} height={GAME_HEIGHT}/>
        {children}
    </>
  )
}

export const GAME_BOX_WIDTH = GAME_WIDTH;
export const GAME_BOX_HEIGHT = GAME_WIDTH;