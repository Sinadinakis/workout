export default function ResultModal({ result, timer }) {

    return (
        <dialog className="result-modal" open={true}>
            <h2>You {result}</h2>
            <p>The target time was <strong>{timer}</strong></p>
            <p>You stop the timer with <strong>X seconds left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}