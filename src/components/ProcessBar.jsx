import {useEffect, useState} from "react";
const TIMER = 3000;

export default function ProcessBar({ timer }) {
    const [remainingTime, setRemainingTime ] = useState(TIMER);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        return () => clearInterval(intervalId);
    }, []);

    return (<progress value={remainingTime} max={TIMER}/>)
}