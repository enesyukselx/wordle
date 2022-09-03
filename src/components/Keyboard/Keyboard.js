import { useState } from "react";

import classes from "./Keyboard.module.css";
import Key from "./Key";

const Keyboard = () => {
    const row1 = ["E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"];
    const row3 = ["Z", "C", "V", "B", "N", "M", "Ö", "Ç"];

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
    };

    const enterHandler = () => {};

    const deleteHandler = () => {};

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
