import {useEffect, useRef} from "react";
import { createPortal } from 'react-dom';

export default function ResultModal({open, result, targetTime, timer, remainingTime, onReset}) {
    const dialogRef = useRef();
    const lost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime /1000).toFixed(0);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useEffect(() => {
        if (open) {
            dialogRef.current.showModal();
        }
    }, [open]);

    return createPortal(
        <dialog ref={dialogRef} className="result-modal sm:fixed sm:left-[40%] md:top-[30%] z-10" onClose={onReset}>
            <div className="flex flex-col min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                {lost && <h2>You {result}</h2>}
                {!lost && <h2>Your score: {score}</h2>}
                <p>The target time was <strong>{timer}</strong></p>
                <p>You stop the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
                <form method="dialog" onSubmit={onReset}>
                    <button>Close</button>
                </form>
            </div>
        </dialog>,
        document.getElementById('modal')
    )
}