import User from './components/User.jsx';
import WorkoutChallenge from "./components/WorkoutChallenge.jsx";
import {useState} from "react";

const workouts = [
    {
        title: 'Pushups',
        description: 'Do 30 pushups',
        targetTime: 60 * 1,
    },
    {
        title: 'Squats',
        description: 'Do 30 squats',
        targetTime: 60 * 2,
    },
    {
        title: 'Pullups',
        description: 'Do 10 pullups',
        targetTime: 60 * 3,
    },
];

function App() {
    const [completedWorkouts, setCompletedWorkouts] = useState([]);

    function handleWorkoutComplete(workoutTitle) {
        setCompletedWorkouts((prevCompletedWorkouts) => [
            ...prevCompletedWorkouts,
            workoutTitle,
        ]);
    }

    return (
        <div className="max-w-6xl mx-auto bg-black px-4 sm:px-8 rounded-2xl md:my-2">
            <header className="pt-8">
                <h1>The <em>Best</em> Workout</h1>
            </header>
            <User/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {workouts.map((workout) => (
                    <div key={workout.title}>
                        <WorkoutChallenge
                            {...workout}
                            onComplete={() => handleWorkoutComplete(workout.title)}
                        />
                    </div>
                ))}
            </div>
            <section className="max-w-5xl mx-auto pb-20">
                <h2>Completed workouts</h2>
                <ul>
                    {completedWorkouts.map((workoutTitle, index) => (
                        <li key={index}>{workoutTitle}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default App;
