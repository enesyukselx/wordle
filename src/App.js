import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
    return (
        <div className={classes.App}>
            <Header />
            <Keyboard />
        </div>
    );
}

export default App;
