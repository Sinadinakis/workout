import User from './components/User.jsx';
import WorkoutChallenge from "./components/WorkoutChallenge.jsx";
import {useState} from "react";

const workouts = [
    {
        title: 'Pushups',
        description: 'Do 30 pushups',
        time: 1000 * 60 * 1,
    },
    {
        title: 'Squats',
        description: 'Do 30 squats',
        time: 1000 * 60 * 2,
    },
    {
        title: 'Pullups',
        description: 'Do 10 pullups',
        time: 1000 * 60 * 3,
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
        <>
            <User/>
            <div id="challenges">
                {workouts.map((workout) => (
                    <div key={workout.title}>
                        <WorkoutChallenge
                            {...workout}
                            onComplete={() => handleWorkoutComplete(workout.title)}
                        />
                    </div>
                ))}
            </div>
            <section>
                <h2>Completed workouts</h2>
                <ul>
                    {completedWorkouts.map((workoutTitle, index) => (
                        <li key={index}>{workoutTitle}</li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default App;
