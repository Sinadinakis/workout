import Header from "./Header.jsx";
import User from "./User.jsx";
import WorkoutChallenge from "./WorkoutChallenge.jsx";
import {useContext, useState} from "react";
import {ThemeContext} from "../store/theme-context.jsx";
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

export default function Page() {
    const [completedWorkouts, setCompletedWorkouts] = useState([]);
    const themeCtx = useContext(ThemeContext);

    function handleWorkoutComplete(workoutTitle) {
        setCompletedWorkouts((prevCompletedWorkouts) => [
            ...prevCompletedWorkouts,
            workoutTitle,
        ]);
    }

    return (
        <div id="app" className={themeCtx.theme}>
            <Header/>
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
    )
}