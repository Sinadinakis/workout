import {createContext, useState} from "react";

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
})

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }

    const ctxValue = {
        theme,
        toggleTheme,
    }
    return <ThemeContext value={ctxValue}>{children}</ThemeContext>;
}
