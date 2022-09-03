import { useState } from "react";

import classes from "./Game.module.css";
import Tile from "./Tile";

const Game = () => {
    const DUMMY_ANSWER = "KİRPİ";

    const [row1, setRow1] = useState(["K", "A", "L", "E", "M"]);
    const [row2, setRow2] = useState(["K", "İ", "T", "A", "P"]);
    const [row3, setRow3] = useState(["K", "A", "Ğ", "I", "T"]);
    const [row4, setRow4] = useState(["K", "İ", "R", "E", "Ç"]);
    const [row5, setRow5] = useState(["S", "A", "H", "İ", "P"]);
    const [row6, setRow6] = useState(["K", "İ", "R", "P", "İ"]);

    const wrong = (index, row) => {
        const answerLetter = DUMMY_ANSWER[index];
        const rowLetter = row[index];
        if (answerLetter !== rowLetter) {
            return true;
        }
    };

    const correct = (index, row) => {
        const answerLetter = DUMMY_ANSWER[index];
        const rowLetter = row[index];
        if (answerLetter === rowLetter) {
            return true;
        }
    };

    const present = (index, row) => {
        let present = false;

        if (correct(index, row)) {
            return present;
        }

        for (let letter of DUMMY_ANSWER) {
            if (letter === row[index]) {
                present = true;
                return present;
            }
        }
    };

    const empty = (letter) => letter.trim() === "";

    return (
        <div className={classes.Game}>
            <div className={classes.Row}>
                {row1.map((letter, index) => (
                    <Tile
                        key={index}
                        letter={letter}
                        {...(!empty(letter) &&
                            wrong(index, row1) && { wrong: true })}
                        {...(present(index, row1) && { present: true })}
                        {...(correct(index, row1) && { correct: true })}
                    />
                ))}
            </div>
            <div className={classes.Row}>
                {row2.map((letter, index) => (
                    <Tile
                        key={index}
                        letter={letter}
                        {...(!empty(letter) &&
                            wrong(index, row2) && { wrong: true })}
                        {...(present(index, row2) && { present: true })}
                        {...(correct(index, row2) && { correct: true })}
                    />
                ))}
            </div>
            <div className={classes.Row}>
                {row3.map((letter, index) => (
                    <Tile
                        key={index}
                        letter={letter}
                        {...(!empty(letter) &&
                            wrong(index, row3) && { wrong: true })}
                        {...(present(index, row3) && { present: true })}
                        {...(correct(index, row3) && { correct: true })}
                    />
                ))}
            </div>
            <div className={classes.Row}>
                {row4.map((letter, index) => (
                    <Tile
                        key={index}
                        letter={letter}
                        {...(!empty(letter) &&
                            wrong(index, row4) && { wrong: true })}
                        {...(present(index, row4) && { present: true })}
                        {...(correct(index, row4) && { correct: true })}
                    />
                ))}
            </div>
            <div className={classes.Row}>
                {row5.map((letter, index) => (
                    <Tile
                        key={index}
                        letter={letter}
                        {...(!empty(letter) &&
                            wrong(index, row5) && { wrong: true })}
                        {...(present(index, row5) && { present: true })}
                        {...(correct(index, row5) && { correct: true })}
                    />
                ))}
            </div>
            <div className={classes.Row}>
                {row6.map((letter, index) => (
                    <Tile
                        key={index}
                        letter={letter}
                        {...(!empty(letter) &&
                            wrong(index, row6) && { wrong: true })}
                        {...(present(index, row6) && { present: true })}
                        {...(correct(index, row6) && { correct: true })}
                    />
                ))}
            </div>
        </div>
    );
};

export default Game;
