/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react'
import styled from 'styled-components';
import { useDisplayName } from './Hooks/HooksMain'

export default function Obstacle<ObstacleProps>(ObstacleProps) {
  useDisplayName("Obstacle")
  return (
    <>
      
          <ObstacleStyled
            top={ObstacleProps.top}
            width={ObstacleProps.width}
            height={ObstacleProps.height}
            left={ObstacleProps.left} /></>
  )
}
interface ObstacleProps {
  top?: number;
  width: number;
  height: number;
  left: number;
}

const ObstacleStyled = styled.div<ObstacleProps>`
  position: relative;
  top: ${(props) => props.top}px;
  background-color: green;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
`