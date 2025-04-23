import {useRef, useState} from "react";
import {styled} from "styled-components";
import ResultModal from "./ResultModal.jsx";

const Section = styled.section`
    @apply flex flex-col flex-wrap gap-2 items-center justify-center;
    max-width: 50rem;
    margin: 3rem auto;
    width: 22rem;
    padding: 2rem;
    background: linear-gradient(#b6ff84, #4f8759);
    color: #221c18;
    box-shadow: 0 2px 8px rgba(35, 34, 34, 0.6);
    border-radius: 6px;

    & .active {
        animation: flash 1s infinite;
    }

    & button {
        @apply border-none cursor-pointer;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        background: #12352f;
        color: #edfcfa;
        font-size: 1.2rem;

        & :hover {
            background: #051715;
        }
    }

    & h2 {
        font-size: 1.5rem;
        letter-spacing: 0.1em;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
        color: #221c18;
    }

    & .challenge-time {
        border: 1px solid #0b1007;
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        margin: 0.5rem;
    }
`
export default function WorkoutChallenge({title, description, time, onComplete}) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerStopped, setTimerStopped] = useState(false);

    const [timerExpired, setTimerExpired] = useState(false);
    let timer = useRef();
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedTime = `${minutes} minute${minutes > 1 ? 's' : ''} ${seconds.toString().padStart(1, '0')} second${seconds > 1 ? 's' : ''}`;

    function handleStart() {
        setTimerStarted(true);
        console.log(time);
        timer.current = setTimeout(() => {
            console.log('timer start');
            setTimerExpired(true);
            setTimerStarted(false);
            onComplete();
        }, time * 1000);
        console.log('timer stop');
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(true);
        setTimerStopped(true);
    }

    return (
        <>
            {timerExpired && <ResultModal timer={formattedTime} result="lost" />}
            <Section>
                <h2>{title}</h2>
                <p>{description}</p>
                <p className="challenge-time">
                    {formattedTime}
                </p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Timer
                </button>
                <p className={timerStarted && !timerStopped ? 'active' : 'undefined'}>
                    {!timerStopped ? (timerStarted ? 'Timer is running...' : 'Time is inactive') : 'Timer is stopped'}
                </p>
            </Section>
        </>
    )
}