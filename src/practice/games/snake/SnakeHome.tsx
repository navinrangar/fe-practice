import React, { useEffect, useState } from 'react'
import { cursorTo } from 'readline';
import { DOWN, getRandomPosition, LEFT, RIGHT, setCoordinates, STOP, UP } from './extra';

const Snake = () => {

  const [style, setStyle] = useState({});
  const [dir, setDir] = useState(39);
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const setCoordinates = (x: number, y: number) => {
    // const position = getRandomPosition();
    return {
      position: 'relative',
      left: `${x}px`,
      top: `${y}px`,
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
      changeDir(event.keyCode);
    });


    const interval = setInterval(() => {
      console.log(dir);
      console.log(pos);


      switch (dir) {
        case 40:
          setPos({ x: pos.x, y: pos.y + 10 });
          break;

        case 39:
          setPos({ x: pos.x + 10, y: pos.y });
          break;

        case 38:
          setPos({ x: pos.x, y: pos.y - 10 });
          break;

        case 37:
          setPos({ x: pos.x - 10, y: pos.y });
          break;

        default:
          setPos({ x: (pos.x + 10), y: (pos.y) })
      }

      const newStyle =
        setCoordinates(pos.x,
          pos.y);
      setStyle(newStyle);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [pos])


  return (
    <div className='absolute w-96 h-96 border-2 border-black'>
      <div
        style={style}
        onChange={
          (e: any) => {
            setPos({ x: e.target.screenX, y: e.target.screenY })
          }
        }
      // onClick={(e: any) => {
      //   setPos({ x: e.target.screenX, y: e.target.screenY });
      //   const newStyle =
      //     setCoordinates(pos.x,
      //       pos.y);
      //   setStyle(newStyle);
      // }}
      > ..... </div>
      {dir && <p> You are {dir} </p>}
    </div>)
}

export default Snake;