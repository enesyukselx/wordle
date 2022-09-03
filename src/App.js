import classes from "./App.module.css";
import Game from "./components/Game/Game";
import Header from "./components/Header/Header";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
    return (
        <div className={classes.App}>
            <Header />
            <Game />
            <Keyboard />
        </div>
    );
}

export default App;
