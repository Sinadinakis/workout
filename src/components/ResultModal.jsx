export default function ResultModal({ref, result, timer}) {

    return (
        <dialog ref={ref} className="result-modal absolute left-[40%] top-[30%] z-10">
            <div className="flex flex-col min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <h2>You {result}</h2>
                <p>The target time was <strong>{timer}</strong></p>
                <p>You stop the timer with <strong>X seconds left</strong></p>
                <form method="dialog">
                    <button>Close</button>
                </form>
            </div>
        </dialog>
    )
}