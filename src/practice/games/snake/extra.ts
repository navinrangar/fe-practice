export const BOARD_WIDTH = 500;
export const BOARD_HEIGHT = 500;
export const LEFT  = 37; 
export const UP    = 38;
export const RIGHT = 39; 
export const DOWN  = 40;
export const STOP  = 32;


export function getRandomPosition() {
    return  { 
        x: Math.floor(Math.random() *BOARD_WIDTH),
        y: Math.floor(Math.random() *BOARD_HEIGHT) 
    }
}

export function setCoordinates(x: number,y:number) {
    // You don't need whitespace in here, I added it for readability
    // I would recommend using something like EmotionJS for this
        return `position:absolute;   
                left:${x}px;         
                top:${y}px;`
    }