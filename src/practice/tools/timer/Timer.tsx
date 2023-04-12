import { useEffect, useState } from "react";


const Timer = () => {

    const [secondLeft, setSecondLeft] = useState(0)
    const [inter, setInter] = useState<any>();

    const setTime = (e: any) => {
        setSecondLeft(e.target.value);
    }

    const setTimer = () => {
        setInter(setInterval(() => {
            setSecondLeft((set) => set - 1);
        }, 1000))
    }

    useEffect(() => {
        if (secondLeft <= 1)
            return () => clearInterval(inter)
    }, [secondLeft])


    return (
        <div>
            <h1> Timer </h1>
            <input type={'number'} onChange={(e) => setTime(e)} />
            <button onClick={() => setTimer()}> set </button>
            <p> `Number of seconds left`: {secondLeft}</p>
        </div>
    )
}

export default Timer;