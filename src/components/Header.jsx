import {useContext} from "react";
import {ThemeContext} from "../store/theme-context.jsx";

export default function Header() {
    const themeCtx = useContext(ThemeContext);

    return (
        <header className="text-center pt-8">
            <h1>The <em>Best</em> Workout</h1>
            <button className="bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={themeCtx.toggleTheme}>Toggle Theme</button>
        </header>
    )
}