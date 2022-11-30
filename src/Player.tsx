/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import styled from 'styled-components';
import { useDisplayName } from './Hooks/HooksMain'

export default function Cat<CatProps>(props) {
    useDisplayName("Cat")

  return (
      <>
         
          <CatSvg top={ props.top}/>
      </>
  )
}

const CatStyled = styled.div<CatProps>`
    position: relative;
    background-color: red;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    top: ${(props) => props.top}px;
    left: -500px;
    border-radius: 50%;
`;
interface CatProps {
    top: number;
    width?: number;
    height?: number;
}

function CatSvg<CatProps>(props) {
    useDisplayName("CatSVG")
    return (
        <div className="player" style={{position: "relative",top: props.top, left: -500, transform: "rotate(90deg)", height: 100, width: 100}}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={100}
            viewBox="0 0 1500 1500"
            height={100}
            
            >
            <path
            style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "#242424",
                fillOpacity: 1,
            }}
            d="M361.254 540.625c0-9.102 36.586-51.73 36.586-51.73s2.05-47.196 4.258-60.797c4.316-26.676 35.468-48.618 76.351-62.051 11.125-7.586-9.734-49.086-6.21-55.735 3.542-6.66 50.64-6.992 72.577 41.333 38.598 13.933 50.348 5.906 86.489 64.863 19.968 32.601 58.66 139.316 71.886 164.613 51.551 98.649 137.262 77.887 193.532 201.621 72.097 158.531 24.761 254.211 19.312 296.567 65.414 10.004 93.031-74.145 45.028-158.887-107.31-189.434-141.344-441.649 12.535-471.23 58.515-11.258 130.53 53.992 92.28 112.5-28.358 43.335-55.315 8.035-79.972 43.535-56.265 80.98 153.012 307.78 34.64 492.5-43.843 68.425-114.75 88.707-154.495 93.828-39.742 5.132-253.403 2.32-295.637 0-42.223-2.32-3.867-52.727 32.3-54.797 36.18-2.07 86.958-4.965 86.958-4.965s-110.547 10.266-100.758-78.711c8.469-76.945 90.258-123.66 91.516-125.824-7.09.27-65.43 33.941-97.707 105.96-1.055-40.128-20.504-42.991-20.504-42.991s19.636 28.851 12.722 67.476c-2.394 13.324-16.28 38.813-21.382 51.742-14.63 37.118-9.274 77.102-21.395 77.102h-80.578c-12.441 0-14.461-12.106 5.187-33.23 4.633-4.997 15.946-3.368 20.872-10.36 17.921-25.441 26.988-77.195 31.054-138.871.754-99.848-45.265-121.422-44.5-253.3.45-76.013 50.649-100.59 27.008-137.708-7.832-12.316-79.723-4.965-88.672-13.215-11.637-10.691-23.703-26.476-29.465-44.058-5.062-7.602-11.816-8.051-11.816-15.18"
            />
            </svg>
            </div>
    )
}

