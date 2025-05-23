import {useEffect, useState} from "react";
import ProcessBar from "./ProcessBar.jsx";
const TIMER = 3000;
export default function ResultModal({result, targetTime, timer, remainingTime, onReset}) {
    const lost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(0);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onReset();
        }, TIMER);

        return () => clearTimeout(timeout);
    }, [onReset]);

    return (
        <div className="flex flex-col min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {lost && <h2>You {result}</h2>}
            {!lost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{timer}</strong></p>
            <p>You stop the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
            <ProcessBar timer={TIMER}/>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </div>
    );
}