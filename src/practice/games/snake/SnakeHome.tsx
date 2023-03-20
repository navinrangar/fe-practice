import React, { useEffect, useState } from 'react'
import { cursorTo } from 'readline';
import { DOWN, getRandomPosition, LEFT, RIGHT, setCoordinates, STOP, UP } from './extra';

const Snake = () => {

  const [style, setStyle] = useState({});
  const [dir, setDir] = useState(38);

  const setCoordinates = (x: number, y: number) => {
    const position = getRandomPosition();
    return {
      position: 'relative',
      left: `${position.x}px`,
      top: `${position.y}px`,
      cursor: 'pointer',
    }
  }

  const changeDir = (keyCode: any) => {
    let direction = keyCode;
    switch (keyCode) {
      case LEFT:
        direction = (direction === RIGHT) ? RIGHT : LEFT;
        setDir(keyCode);
        break;
      case RIGHT:
        direction = (direction === LEFT) ? LEFT : RIGHT;
        setDir(keyCode);
        break;
      case UP:
        direction = (direction === DOWN) ? DOWN : UP;
        setDir(keyCode);
        break;
      case DOWN:
        direction = (direction === UP) ? UP : DOWN;
        setDir(keyCode);
        break;
      case STOP:
        direction = STOP;
        setDir(keyCode);
        break;
      default:
        break;
    }

    // setDir(keyCode);
  }


  useEffect(() => {
    document.title = "snake-game";
    document.addEventListener("keydown", (event) => {
      console.log('event', event);
      changeDir(event.keyCode);
    });
  })

  console.log('dir', dir);

  return (
    <div className='absolute w-96 h-96 border-2 border-black'>
      <div
        style={style}
        onClick={(e: any) => {
          const newStyle =
            setCoordinates(e.target.screenX,
              e.target.screenY);
          setStyle(newStyle);
        }}
      > ..... </div>
      { dir && <p> You are {dir} </p>}
    </div>)
}

export default Snake;