import { useState, useContext } from "react";

import Context from "../../store/context";
import classes from "./Keyboard.module.css";
import Key from "./Key";

const Keyboard = () => {
    const ctx = useContext(Context);

    const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    const row3 = ["z", "x", "c", "v", "b", "n", "m"];

    const row1Obj = row1.map((letter, index) => {
        return {
            id: index,
            letter: letter,
            correct: false,
            wrong: false,
            present: false,
        };
    });
    const row2Obj = row2.map((letter, index) => {
        return {
            id: index,
            letter: letter,
            correct: false,
            wrong: false,
            present: false,
        };
    });
    const row3Obj = row3.map((letter, index) => {
        return {
            id: index,
            letter: letter,
            correct: false,
            wrong: false,
            present: false,
        };
    });

    const [row1State, setRow1State] = useState(row1Obj);
    const [row2State, setRow2State] = useState(row2Obj);
    const [row3State, setRow3State] = useState(row3Obj);

    const keyClickHandler = (letter) => {
        if (letter === "Enter") {
            enterHandler();
        }
        if (letter === "Delete") {
            deleteHandler();
        }

        if (letter !== "Enter" && letter !== "Delete") {
            ctx.keyFunc(letter);
        }
    };

    const enterHandler = () => {
        ctx.enterFunc();
    };

    const deleteHandler = () => {
        ctx.backspaceFunc("Backspace");
    };

    return (
        <div className={classes.Keyboard}>
            <div className={classes.Row}>
                {row1State.map((key) => (
                    <Key
                        key={key.id}
                        letter={key.letter}
                        correct={key.correct}
                        wrong={key.wrong}
                        present={key.present}
                        clickHandler={keyClickHandler}
                    />
                ))}
            </div>
            <div className={classes.Row}>
                {row2State.map((key) => (
                    <Key
                        key={key.id}
                        letter={key.letter}
                        correct={key.correct}
                        wrong={key.wrong}
                        present={key.present}
                        clickHandler={keyClickHandler}
                    />
                ))}
            </div>
            <div className={classes.Row}>
                <Key
                    key="enter"
                    letter="Enter"
                    clickHandler={keyClickHandler}
                />

                {row3State.map((key) => (
                    <Key
                        key={key.id}
                        letter={key.letter}
                        correct={key.correct}
                        wrong={key.wrong}
                        present={key.present}
                        clickHandler={keyClickHandler}
                    />
                ))}
                <Key
                    key="delete"
                    letter="Delete"
                    clickHandler={keyClickHandler}
                />
            </div>
        </div>
    );
};

export default Keyboard;
