import ThemeContextProvider from "./store/theme-context.jsx";
import Page from "./components/Page.jsx";

function App() {

    return (
        <ThemeContextProvider>
            <Page />
        </ThemeContextProvider>
    );
}

export default App;
