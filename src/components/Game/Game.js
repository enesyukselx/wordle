import React, { useState } from "react";
import useKeypress from "react-use-keypress";

import classes from "./Game.module.css";
import Tile from "./Tile";
import Modal from "../UI/Modal";

const Game = () => {
    const DUMMY_ANSWER = "fener";

    const [showModal, setShowModal] = useState(false);
    const [finished, setFinished] = useState(false);
    const [isWin, setIsWin] = useState(false);

    const availableLetters = [
        "e",
        "r",
        "t",
        "y",
        "u",
        "ı",
        "o",
        "p",
        "ğ",
        "ü",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ş",
        "i",
        "z",
        "c",
        "v",
        "b",
        "n",
        "m",
        "ö",
        "ç",
    ];

    const [isEntered, setIsEntered] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const [tileCount, setTileCount] = useState(0);
    const [rowCount, setRowCount] = useState(0);

    const [row1, setRow1] = useState(["", "", "", "", ""]);
    const [row2, setRow2] = useState(["", "", "", "", ""]);
    const [row3, setRow3] = useState(["", "", "", "", ""]);
    const [row4, setRow4] = useState(["", "", "", "", ""]);
    const [row5, setRow5] = useState(["", "", "", "", ""]);
    const [row6, setRow6] = useState(["", "", "", "", ""]);

    const rows = [row1, row2, row3, row4, row5, row6];
    const setRows = [setRow1, setRow2, setRow3, setRow4, setRow5, setRow6];

    useKeypress("Enter", () => {
        if (tileCount === 5 && rowCount !== 6 && !finished) {
            setRowCount(rowCount + 1);
            setIsEntered((prevState) => {
                const updatedArr = [...prevState];
                updatedArr[rowCount] = true;
                return updatedArr;
            });
            setTileCount(0);
            if (rowCount === 5) {
                setTileCount(5);
                setTimeout(() => {
                    setShowModal(true);
                }, 500);
                setFinished(true);
            }

            if (rows[rowCount].join("") === DUMMY_ANSWER) {
                setTimeout(() => {
                    setShowModal(true);
                }, 500);
                setFinished(true);
                setIsWin(true);
            }
        }
    });

    useKeypress("Backspace", () => {
        if (tileCount !== 0 && !finished && rowCount !== 6) {
            setTileCount((prevState) => prevState - 1);
            setRows[rowCount]((prevState) => {
                const updatedArr = [...prevState];
                updatedArr[tileCount - 1] = "";
                return updatedArr;
            });
        }
    });

    useKeypress(availableLetters, (e) => {
        if (tileCount === 5) {
            return;
        }
        if (!finished) {
            setRows[rowCount]((prevRow1) => {
                const newRow1 = [...prevRow1];
                newRow1[tileCount] = e.key;
                return newRow1;
            });
            setTileCount((prevTileCount) => prevTileCount + 1);
        }
    });

    const wrong = (index, row) => {
        const answerLetter = DUMMY_ANSWER[index];
        const rowLetter = row[index];
        if (answerLetter.toUpperCase() !== rowLetter.toUpperCase()) {
            return true;
        }
    };

    const correct = (index, row) => {
        const answerLetter = DUMMY_ANSWER[index];
        const rowLetter = row[index];
        if (answerLetter.toUpperCase() === rowLetter.toUpperCase()) {
            return true;
        }
    };

    const present = (index, row) => {
        let present = false;

        if (correct(index, row)) {
            return present;
        }

        for (let letter of DUMMY_ANSWER) {
            if (letter.toUpperCase() === row[index].toUpperCase()) {
                present = true;
                return present;
            }
        }
    };

    const empty = (letter) => letter.trim() === "";

    const closeModalHandler = () => {
        setShowModal(false);
    };

    return (
        <React.Fragment>
            {showModal && (
                <Modal onClose={closeModalHandler}>
                    <h1>{isWin ? "Congrulations!!!!" : "Try Again :("}</h1>
                    <p className={classes.ModalParagraph}>
                        {!isWin &&
                            "The answer is " + DUMMY_ANSWER.toUpperCase()}
                        {isWin && (
                            <span>
                                You found the answer in
                                <strong> {rowCount}</strong> guess.
                            </span>
                        )}
                    </p>
                    <h3 className={classes.ModalTitle}>Your guesses</h3>
                    <ul className={classes.List}>
                        {rows.map((row, index) => (
                            <li key={index}>{row.join("").toUpperCase()}</li>
                        ))}
                    </ul>
                    <div className={classes.Actions}>
                        <button
                            className={classes.Button}
                            onClick={closeModalHandler}
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            )}
            <div className={classes.Game}>
                <div className={classes.Row}>
                    {row1.map((letter, index) => (
                        <Tile
                            key={index}
                            letter={letter}
                            {...(!empty(letter) &&
                                isEntered[0] &&
                                wrong(index, row1) && { wrong: true })}
                            {...(isEntered[0] &&
                                present(index, row1) && { present: true })}
                            {...(isEntered[0] &&
                                correct(index, row1) && { correct: true })}
                        />
                    ))}
                </div>
                <div className={classes.Row}>
                    {row2.map((letter, index) => (
                        <Tile
                            key={index}
                            letter={letter}
                            {...(!empty(letter) &&
                                isEntered[1] &&
                                wrong(index, row2) && { wrong: true })}
                            {...(isEntered[1] &&
                                present(index, row2) && { present: true })}
                            {...(isEntered[1] &&
                                correct(index, row2) && { correct: true })}
                        />
                    ))}
                </div>
                <div className={classes.Row}>
                    {row3.map((letter, index) => (
                        <Tile
                            key={index}
                            letter={letter}
                            {...(!empty(letter) &&
                                isEntered[2] &&
                                wrong(index, row3) && { wrong: true })}
                            {...(isEntered[2] &&
                                present(index, row3) && { present: true })}
                            {...(isEntered[2] &&
                                correct(index, row3) && { correct: true })}
                        />
                    ))}
                </div>
                <div className={classes.Row}>
                    {row4.map((letter, index) => (
                        <Tile
                            key={index}
                            letter={letter}
                            {...(!empty(letter) &&
                                isEntered[3] &&
                                wrong(index, row4) && { wrong: true })}
                            {...(isEntered[3] &&
                                present(index, row4) && { present: true })}
                            {...(isEntered[3] &&
                                correct(index, row4) && { correct: true })}
                        />
                    ))}
                </div>
                <div className={classes.Row}>
                    {row5.map((letter, index) => (
                        <Tile
                            key={index}
                            letter={letter}
                            {...(!empty(letter) &&
                                isEntered[4] &&
                                wrong(index, row5) && { wrong: true })}
                            {...(isEntered[4] &&
                                present(index, row5) && { present: true })}
                            {...(isEntered[4] &&
                                correct(index, row5) && { correct: true })}
                        />
                    ))}
                </div>
                <div className={classes.Row}>
                    {row6.map((letter, index) => (
                        <Tile
                            key={index}
                            letter={letter}
                            {...(!empty(letter) &&
                                isEntered[5] &&
                                wrong(index, row6) && { wrong: true })}
                            {...(isEntered[5] &&
                                present(index, row6) && { present: true })}
                            {...(isEntered[5] &&
                                correct(index, row6) && { correct: true })}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Game;
