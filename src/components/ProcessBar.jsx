import {useEffect, useState} from "react";

export default function ProcessBar({ timer }) {
    const [remainingTime, setRemainingTime ] = useState(TIMER);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        return () => clearInterval(intervalId);
    }, []);

    return (<progress value={remainingTime} max={timer}/>)
}