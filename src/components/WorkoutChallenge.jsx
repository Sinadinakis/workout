import {useRef, useState, useCallback} from "react";
import {styled} from "styled-components";
import ResultModal from "./ResultModal.jsx";
import Modal from "./Modal.jsx";

const Section = styled.section`
    margin: 3rem auto;
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
export default function WorkoutChallenge({title, description, targetTime, onComplete}) {
    const timer = useRef();

    const [timerRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const timeIsActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;
    const minutes = Math.floor(targetTime / 60);
    const seconds = Math.floor(targetTime % 60);
    const formattedTime = `${minutes} minute${minutes > 1 ? 's' : ''} ${seconds.toString().padStart(1, '0')} second${seconds > 1 ? 's' : ''}`;

    if (timerRemaining <= 0) {
        clearInterval(timer.current);
        setIsModalOpen(true);
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
        setIsModalOpen(false);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        setIsModalOpen(true);
        clearInterval(timer.current);
    }

    return (
        <>
            <Modal open={isModalOpen} onReset={handleReset}>
                {isModalOpen ?
                    <ResultModal
                        targetTime={targetTime}
                        timer={formattedTime}
                        result="lost"
                        remainingTime={timerRemaining}
                        onReset={handleReset}
                    /> : null}
            </Modal>
            <Section className="sm:w-[22rem]">
                <h2>{title}</h2>
                <p>{description}</p>
                <p className="challenge-time">
                    {formattedTime}
                </p>
                <button onClick={timeIsActive ? handleStop : handleStart}>
                    {timeIsActive ? 'Stop' : 'Start'} Timer
                </button>
                <p className={timeIsActive ? 'active' : 'undefined'}>
                    {timeIsActive ? 'Timer is running...' : 'Time is inactive'}
                </p>
            </Section>
        </>
    )
}